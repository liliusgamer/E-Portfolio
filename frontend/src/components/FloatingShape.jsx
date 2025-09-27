import React, { useRef, useEffect } from "react";

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
            {geometry === "box" ? <boxGeometry args={[1, 1, 1]} /> : <sphereGeometry args={[0.7, 32, 32]} />}
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default FloatingShape;
