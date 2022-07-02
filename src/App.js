import React, { Suspense, useRef, useEffect, useState, useMemo } from 'react'

import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls, useCursor, Stars, Edges, Text3D } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

import './App.css';
import lato from './assets/Lato Black_Regular.json'

function Button(props) {
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh 
    onPointerOver={() => hover(true)}
    onPointerOut={() => hover(false)}
    onClick={() => window.open(props.link , "_blank")}>
      <Text3D font={lato} size={0.5} position={props.position}>
        {props.text}
        <meshStandardMaterial color="white" />
        <Edges color="white" />
      </Text3D>
    </mesh>
  )
}

function Torusknot(props) {
  const gradient = 0.7
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <mesh
      {...props}
      ref={ref}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="orange" />
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color="white" />
    </mesh>
  )
}


function Knot(){
  return(
    <Canvas id='bg'>
      <Text3D font={lato} size={0.6} position={[-1.73, 2, 0]}>
        adrien.vc
        <meshStandardMaterial color="white" />
        <Edges color="white" />
      </Text3D>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[10, 10, 10]} />
      <Torusknot />
      <Button link='https://github.com/Crypto-Advisor' text='<GitHub>' position={[-1.55, -2.4, 0]}/>
      <Button link='https://www.linkedin.com/in/adriennav/' text='<LinkedIn>' position={[-1.8, -3.2, 0]}/>
      <Stars />
      <OrbitControls  enableZoom={false} enablePan={false} />
  </Canvas>
  )
}


function App() {

  return (
    <div className="App">
      <Knot />
      <div className='item-container'>
        <h1>adrien@venturenode.xyz</h1>
        <p className='paragraph'>Founder of multiple financial service products in the quantitative finance space. Skilled in Online Content Creation, Solidity Development, Alternative Data Analysis, and Management.</p>
      </div>
      <div className='item-container'>
        <h2>Java, C, React, Express, Mongo, PostgreSQL, NodeJs, Python, Rust, Solidity, Golang, PHP, Django</h2>
      </div>
    </div>
  );
}

export default App;
