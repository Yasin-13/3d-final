"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

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

      // Move the model slightly left
      scene.position.x += -center.x - 10; 
      scene.position.y += -center.y;
      scene.position.z += -center.z;

      // Normalize scale
      const maxDim = Math.max(size.x, size.y, size.z);
      scene.scale.setScalar(30 / maxDim);
    }
  }, [scene, error]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelLoader() {
  return (
    <Canvas
      camera={{ position: [0, 50, 80], fov: 15 }}
      style={{ background: "white" }} // White background
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <pointLight position={[20, 30, 20]} intensity={2} />
        <directionalLight intensity={1} position={[5, 15, 10]} castShadow />
        <spotLight intensity={1.5} position={[-10, 30, -10]} angle={0.2} penumbra={1} castShadow />
        <hemisphereLight intensity={0.5} skyColor={0xffffff} groundColor={0x444444} position={[0, 50, 0]} />

        <Model url="/first.glb" />
        <OrbitControls enableZoom={true} maxDistance={115} minDistance={5} />
      </Suspense>
    </Canvas>
  );
}
