"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import * as THREE from "three";

/* Fuerza fondo transparente desde dentro de la escena */
function TransparentBackground() {
  const { gl, scene } = useThree();
  useEffect(() => {
    gl.setClearColor(0x000000, 0);
    scene.background = null;
  }, [gl, scene]);
  return null;
}

function ArmModel() {
  const { scene, animations } = useGLTF("/models/roboticManipulator.glb");
  const armRef = useRef<THREE.Group>(null);
  
  // Extraemos las animaciones del modelo (si las tiene)
  const { actions } = useAnimations(animations, armRef);

  useEffect(() => {
    // Si el modelo trae animaciones, reproducimos la primera automáticamente
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0];
      actions[firstActionName]?.play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (!armRef.current) return;
    armRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1 - 1.5;
    // Rotación suave para que se aprecie el modelo
    armRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={armRef}>
      {/* Escala aumentada y posición movida hacia la derecha y un poco atrás */}
      <primitive object={scene} scale={0.12} position={[2.5, -1.5, -2]} />
    </group>
  );
}

export default function RoboticArm() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full"
      >
        <TransparentBackground />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-3, 2, -2]} color="#6366f1" intensity={2} />
        <pointLight position={[3, -2, 2]} color="#ec4899" intensity={1.5} />
        
        <Suspense fallback={null}>
          <ArmModel />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/roboticManipulator.glb");
