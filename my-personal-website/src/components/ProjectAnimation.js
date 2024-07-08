import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
    const gltf = useGLTF(url);
    return <primitive object={gltf.scene} dispose={null} />;
}

function RotatingBox() {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.y += 0.01));

    return (
        <mesh ref={mesh} position={[0, 0, 0]} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

function ProjectAnimation({ modelUrl }) {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                {modelUrl ? <Model url={modelUrl} /> : <RotatingBox />}
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}

export default ProjectAnimation;
