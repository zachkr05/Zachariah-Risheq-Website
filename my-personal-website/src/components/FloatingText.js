import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// Extend the THREE namespace with TextGeometry
extend({ TextGeometry });

function TextMesh({ text, position }) {
    const mesh = useRef();
    const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json');

    const textOptions = {
        font: font,
        size: 1,
        height: 0.2,
    };

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        mesh.current.rotation.y = Math.sin(elapsedTime) * 0.5; // Oscillate around Y-axis
    });

    return (
        <mesh ref={mesh} position={position}>
            <textGeometry args={[text, textOptions]} />
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>
    );
}

function FloatingText({ techStack }) {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                {techStack.map((tech, index) => (
                    <TextMesh
                        key={index}
                        text={tech}
                        position={[index * 2 - (techStack.length - 1), 0, 0]} // Initial position along X-axis
                    />
                ))}
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}

export default FloatingText;
