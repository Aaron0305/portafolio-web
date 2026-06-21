"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
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

function RobotModel() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(({ clock }) => {
    if (!robotRef.current) return;
    robotRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.08;
    robotRef.current.rotation.x += (mouse.current.y * 0.3 - robotRef.current.rotation.x) * 0.05;
    robotRef.current.rotation.y += (mouse.current.x * 0.3 - robotRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={robotRef}>
      <primitive object={scene} scale={0.15} position={[0, -1.0, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
}

export default function RobotAvatar() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="relative w-full h-[420px]">
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(99,102,241,0.15)",
          background: "radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.06) 0%, rgba(10,10,20,0.95) 70%)",
        }}
      >
        <div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          onPointerDown={() => setTouched(true)}
        >
          <Canvas
            camera={{ position: [0, 0, 3.5], fov: 40 }}
            gl={{ alpha: true }}
          >
            <TransparentBackground />
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[2, 3, 4]} color="#6366f1" intensity={3} />
            <pointLight position={[-3, -1, -2]} color="#818cf8" intensity={1.5} />
            
            <Suspense fallback={null}>
              <RobotModel />
            </Suspense>
            
            <OrbitControls enableZoom enablePan enableRotate />
          </Canvas>
        </div>

        {/* Indicador */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg text-xs tracking-wide text-white/60 transition-opacity duration-500 select-none pointer-events-none ${touched ? "opacity-0" : "opacity-100"}`}
          style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.4)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/>
            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6"/>
            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/>
            <path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 16"/>
          </svg>
          <span>Arrastra para mover</span>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/models/robot.glb");
