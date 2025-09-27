import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

// Hình cơ bản bay lơ lửng
function FloatingShape({ position, color, geometry }) {
    const meshRef = useRef();

    useEffect(() => {
        let frame;
        const animate = () => {
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.01;
                meshRef.current.rotation.y += 0.01;
                meshRef.current.position.y =
                    position[1] + Math.sin(Date.now() * 0.001) * 0.5;
            }
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, [position]);

    return (
        <mesh ref={meshRef} position={position}>
            {geometry === "box" ? (
                <boxGeometry args={[1, 1, 1]} />
            ) : (
                <sphereGeometry args={[0.7, 32, 32]} />
            )}
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

// Box trung tâm xoay liên tục
function CenterBox() {
    const meshRef = useRef();

    useEffect(() => {
        let frame;
        const animate = () => {
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.01;
                meshRef.current.rotation.y += 0.01;
            }
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#4f46e5" />
        </mesh>
    );
}

// Điều khiển camera bằng chuột
function MouseController() {
    const { camera } = useThree();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            camera.position.x = x * 2;
            camera.position.y = y * 2;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [camera]);

    return null;
}

const Hero = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} />

                {/* Background sao */}
                <Stars radius={100} depth={50} count={5000} factor={4} />

                {/* Box trung tâm */}
                <CenterBox />

                {/* Một số shape lơ lửng */}
                <FloatingShape position={[-3, 0, -2]} color="orange" geometry="sphere" />
                <FloatingShape position={[3, 1, -2]} color="lime" geometry="box" />
                <FloatingShape position={[0, -2, 2]} color="pink" geometry="sphere" />

                {/* Camera điều khiển chuột */}
                <MouseController />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Text overlay */}
            <div className="absolute top-1/3 left-0 w-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Welcome to My E-Portfolio
                </h1>
                <p className="mt-4 text-lg md:text-2xl drop-shadow">
                    Khám phá kỹ năng và dự án của tôi!
                </p>
            </div>
        </div>
    );
};

export default Hero;
