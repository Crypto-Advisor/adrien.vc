import React, { Suspense } from 'react'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import texture from "./images/map.jpeg"
import './App.css';
import { Sphere } from 'three';

function Box() {
  const colorMap = useLoader(TextureLoader, texture)

  return (
    <mesh position={[0,0,0]}>
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2} ></Sphere>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas id='bg'>
        <OrbitControls enableZoom={false}/>
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
