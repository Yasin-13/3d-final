import cv2
import cvzone
import argparse
import datetime
import tkinter as tk
from tkinter import ttk, messagebox
from threading import Thread
from ultralytics import YOLO
import pygame
import time
import numpy as np

# Global variables
running = False
cap_left = None
cap_right = None
model = None

# Define argument parser
parser = argparse.ArgumentParser()
parser.add_argument('--modelname', help='name of the YOLO model file (.pt)', required=True)
parser.add_argument('--threshold', help='minimum confidence', default=0.5)
parser.add_argument('--video_left', help='path to the left camera video', required=True)
parser.add_argument('--video_right', help='path to the right camera video', required=True)
args = parser.parse_args()

MODEL_NAME = args.modelname
confidence_threshold = float(args.threshold)
VIDEO_LEFT = args.video_left
VIDEO_RIGHT = args.video_right

pygame.mixer.init()

# Load sound files
sound_left = pygame.mixer.Sound("left.mp3")
sound_right = pygame.mixer.Sound("right.mp3")
welcome_message = pygame.mixer.Sound("welcome_message.mp3")  # Greeting audio

# Stereo Vision Constants
BASELINE = 0.1  
FOCAL_LENGTH = 700  

stereo = cv2.StereoSGBM_create(
    minDisparity=0,
    numDisparities=64,  
    blockSize=15,
    P1=8 * 3 * 15**2,
    P2=32 * 3 * 15**2,
    disp12MaxDiff=1,
    uniquenessRatio=10,
    speckleWindowSize=100,
    speckleRange=32
)

def calculate_depth(disparity):
    """Calculate depth from disparity map, avoiding invalid values."""
    valid_disparity = disparity > 1  # Avoid divide-by-zero errors
    depth = np.where(valid_disparity, (BASELINE * FOCAL_LENGTH) / (disparity + 1e-6), 0)
    return depth

def start_detection():
    global running, cap_left, cap_right, model
    running = True
    cap_left = cv2.VideoCapture(VIDEO_LEFT)  # Left camera
    cap_right = cv2.VideoCapture(VIDEO_RIGHT)  # Right camera

    if not cap_left.isOpened() or not cap_right.isOpened():
        messagebox.showerror("Error", "Error accessing stereo video files")
        return

    try:
        model = YOLO(MODEL_NAME)
    except Exception as e:
        messagebox.showerror("Error", f"Error loading the model: {e}")
        return

    classNames = model.names

    while running:
        retL, frameL = cap_left.read()
        retR, frameR = cap_right.read()

        if not retL or not retR:
            break

        # Convert to grayscale for stereo matching
        grayL = cv2.cvtColor(frameL, cv2.COLOR_BGR2GRAY)
        grayR = cv2.cvtColor(frameR, cv2.COLOR_BGR2GRAY)

        # Compute disparity map
        disparity = stereo.compute(grayL, grayR).astype(np.float32) / 16.0

        # Normalize and display disparity for debugging
        disp_norm = cv2.normalize(disparity, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)
        cv2.imshow("Disparity", disp_norm)

        # Calculate depth
        depth_map = calculate_depth(disparity)

        results = model(frameL, stream=True)
        h, w, _ = frameL.shape
        pothole_detected = False
        pothole_position = None

        for r in results:
            boxes = r.boxes

            for box in boxes:
                data = box.data.tolist()[0]
                confidence = data[4]

                if float(confidence) < confidence_threshold:
                    continue

                xmin, ymin, xmax, ymax = int(data[0]), int(data[1]), int(data[2]), int(data[3])
                cv2.rectangle(frameL, (xmin, ymin), (xmax, ymax), (0, 0, 240), 3)

                cls = box.cls[0]
                name = classNames[int(cls)]
                
                if name.lower() == "pothole":
                    pothole_detected = True
                    pothole_position = (xmin + xmax) / 2

                    # Get average depth in the detected pothole region
                    depth_values = depth_map[ymin:ymax, xmin:xmax]
                    avg_depth = np.mean(depth_values[np.isfinite(depth_values)])  # Avoid NaN values

                    # Debugging: Print depth values
                    print(f"Detected pothole depth: {avg_depth * 100:.1f} cm")

                    # Display depth only if within the correct range
                    if 6 <= avg_depth * 100 <= 12:
                        cv2.putText(frameL, f"Depth: {avg_depth * 100:.1f} cm", (xmin, ymin - 10),
                                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

                    # Display confidence ratio
                    confidence_text = f"Confidence: {confidence * 100:.1f}%"
                    cv2.putText(frameL, confidence_text, (xmin, ymax + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

        if pothole_detected and pothole_position is not None:
            center_x = w / 2
            direction = "Go Right" if pothole_position < center_x else "Go Left"
            color = (0, 255, 0) if pothole_position < center_x else (0, 0, 255)
            cv2.putText(frameL, direction, (50, 100), cv2.FONT_HERSHEY_SIMPLEX, 1.5, color, 3)

            # Play the corresponding sound
            if direction == "Go Right":
                sound_left.play()
            else:
                sound_right.play()
            time.sleep(1)  # Avoid continuous playback

        cv2.imshow("Pothole Detection", frameL)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap_left.release()
    cap_right.release()
    cv2.destroyAllWindows()

def stop_detection():
    global running
    running = False

def on_start():
    thread = Thread(target=start_detection)
    thread.start()

def on_stop():
    stop_detection()

# GUI Setup
root = tk.Tk()
root.title("Pothole Detection System")
root.geometry("600x400")
root.configure(bg="#1a202c")
welcome_message.play()

welcome_label = tk.Label(root, text="Welcome to the Pothole Detection System",
                         font=("Arial", 16, "bold"), fg="#ffffff", bg="#1a202c", wraplength=550, justify="center")
welcome_label.pack(pady=20)

info_label = tk.Label(root, text="Press 'Start' to begin identifying potholes with depth estimation.",
                      font=("Arial", 12), fg="#dcdcdc", bg="#1a202c", wraplength=550, justify="center")
info_label.pack(pady=10)

button_frame = tk.Frame(root, bg="#1a202c")
button_frame.pack(pady=30)

start_button = ttk.Button(button_frame, text="Start", command=on_start)
start_button.grid(row=0, column=0, padx=10)

stop_button = ttk.Button(button_frame, text="Stop", command=on_stop)
stop_button.grid(row=0, column=1, padx=10)

style = ttk.Style()
style.configure("TButton", font=("Arial", 12, "bold"), padding=10, relief="flat")
root.mainloop()