"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

// Model Component
function Model({ url }) {
  const { scene, error } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (error) {
      console.error("Error loading GLTF model:", error);
      return;
    }

    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      scene.position.x += -center.x;
      scene.position.y += -center.y;
      scene.position.z += -center.z;

      const maxDim = Math.max(size.x, size.y, size.z);
      scene.scale.setScalar(30 / maxDim); // Slightly reduced scale
    }
  }, [scene, error]);

  return <primitive ref={ref} object={scene} />;
}

// Extend custom component for React-Three-Fiber (if needed)
extend({ Model });

export default function ModelLoader() {
  return (
    <Canvas
      camera={{ position: [0, 50, 80], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ background: "white" }} // Make background white
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <pointLight position={[20, 30, 20]} intensity={2} />
        <directionalLight intensity={1} position={[5, 15, 10]} castShadow />
        <spotLight intensity={1.5} position={[-10, 30, -10]} angle={0.2} penumbra={1} castShadow />
        <hemisphereLight intensity={0.5} skyColor={0xffffff} groundColor={0x444444} position={[0, 50, 0]} />

        {/* If you need an overlay UI inside the canvas */}
        <Html position={[0, 10, 0]}>
          <div style={{ color: "black", background: "white", padding: "1px" }}></div>
        </Html>

        <Model url="/third.glb" />
        <OrbitControls enableZoom={true} maxDistance={115} minDistance={5} />
      </Suspense>
    </Canvas>
  );
}
