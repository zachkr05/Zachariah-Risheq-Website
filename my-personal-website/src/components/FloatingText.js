import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// Extend the THREE namespace with TextGeometry
extend({ TextGeometry });

function TextMesh({ text, position, fontSize }) {
    const mesh = useRef();
    const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json');

    const textOptions = {
        font: font,
        size: fontSize,
        height: 0.1, // Reduced depth
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
    const fontSize = 1 / techStack.length; // Adjust font size based on the number of items

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    {techStack.map((tech, index) => (
                        <TextMesh
                            key={index}
                            text={tech}
                            position={[0, (techStack.length / 2 - index) * fontSize * 2, 0]} // Position items vertically
                            fontSize={fontSize}
                        />
                    ))}
                </Suspense>
                <OrbitControls />
            </Canvas>
            <div className="hover-message" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div className="hover-text" style={{ display: 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                    Zoom when you hover over it temporarily
                </div>
            </div>
            <style>
                {`
                .hover-message:hover .hover-text {
                    display: block;
                }
                `}
            </style>
        </div>
    );
}

export default FloatingText;
