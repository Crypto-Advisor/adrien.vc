import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Volatility surface modeling implied vol across strikes and maturities
function VolatilitySurface({ xOffset = 0, zOffset = 0, type = 'volatility' }) {
  const mesh = useRef();
  const wireframeMesh = useRef();
  const segments = 60;
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(8, 8, segments, segments);
    const positions = geo.attributes.position.array;
    const colors = new Float32Array(positions.length);
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]; // Strike / Moneyness
      const y = positions[i + 1]; // Time to maturity
      
      let height = 0;
      
      if (type === 'volatility') {
        // Classic volatility smile/smirk - higher at extremes
        const moneyness = x / 4; // Normalize to -1 to 1
        const maturity = (y / 4 + 1) / 2; // 0 to 1
        
        // Vol smile: U-shaped with wings
        const smile = Math.pow(moneyness, 2) * 1.8 + 0.3;
        // Term structure: vol increases with maturity then flattens
        const termStructure = Math.sqrt(maturity) * 0.8 + 0.6;
        // ATM vol dip
        const atmDip = Math.exp(-Math.pow(moneyness * 2, 2)) * 0.4;
        
        height = (smile * termStructure - atmDip) * 1.5;
        
      } else if (type === 'risk') {
        // Risk surface - VaR/CVaR landscape
        const r = Math.sqrt(x * x + y * y) / 4;
        const angle = Math.atan2(y, x);
        
        // Multiple risk peaks
        height = Math.exp(-r) * 2 + 
                 Math.sin(angle * 3) * Math.exp(-r * 2) * 0.8 +
                 Math.cos(x * 0.8) * Math.sin(y * 0.6) * 0.5;
                 
      } else {
        // Greeks surface (delta/gamma/vega)
        const distance = Math.sqrt(x * x + y * y) / 6;
        height = Math.exp(-distance * 3) * 2.5 * Math.cos(x * 0.7) * Math.sin(y * 0.7) +
                 Math.sin(x * 1.2 + y * 0.8) * 0.4;
      }
      
      positions[i + 2] = height;
      
      // Heat map coloring based on height
      const minH = type === 'volatility' ? 0.5 : -1;
      const maxH = type === 'volatility' ? 3.5 : 2.5;
      const normalized = (height - minH) / (maxH - minH);
      const clamped = Math.max(0, Math.min(1, normalized));
      
      if (clamped < 0.33) {
        // Green to Yellow
        const t = clamped / 0.33;
        colors[i] = t;
        colors[i + 1] = 0.8;
        colors[i + 2] = 0.2 * (1 - t);
      } else if (clamped < 0.66) {
        // Yellow to Orange
        const t = (clamped - 0.33) / 0.33;
        colors[i] = 1;
        colors[i + 1] = 0.8 - t * 0.3;
        colors[i + 2] = 0;
      } else {
        // Orange to Red
        const t = (clamped - 0.66) / 0.34;
        colors[i] = 1;
        colors[i + 1] = 0.5 - t * 0.5;
        colors[i + 2] = t * 0.2;
      }
    }
    
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [segments, type]);
  
  useFrame((state) => {
    if (mesh.current && wireframeMesh.current) {
      const time = state.clock.getElapsedTime();
      const positions = mesh.current.geometry.attributes.position.array;
      const colors = mesh.current.geometry.attributes.color.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        
        let height = 0;
        
        if (type === 'volatility') {
          const moneyness = x / 4;
          const maturity = (y / 4 + 1) / 2;
          
          const smile = Math.pow(moneyness, 2) * 1.8 + 0.3;
          const termStructure = Math.sqrt(maturity) * 0.8 + 0.6;
          const atmDip = Math.exp(-Math.pow(moneyness * 2, 2)) * 0.4;
          
          // Add market dynamics
          const marketMove = Math.sin(time * 0.5 + moneyness * 2) * 0.15;
          height = (smile * termStructure - atmDip) * 1.5 + marketMove;
          
        } else if (type === 'risk') {
          const r = Math.sqrt(x * x + y * y) / 4;
          const angle = Math.atan2(y, x);
          
          height = Math.exp(-r) * 2 + 
                   Math.sin(angle * 3 + time * 0.3) * Math.exp(-r * 2) * 0.8 +
                   Math.cos(x * 0.8 + time * 0.2) * Math.sin(y * 0.6) * 0.5;
                   
        } else {
          const distance = Math.sqrt(x * x + y * y) / 6;
          height = Math.exp(-distance * 3) * 2.5 * Math.cos(x * 0.7 + time * 0.4) * Math.sin(y * 0.7 + time * 0.3) +
                   Math.sin(x * 1.2 + y * 0.8 + time * 0.5) * 0.4;
        }
        
        positions[i + 2] = height;
        
        // Update colors
        const minH = type === 'volatility' ? 0.5 : -1;
        const maxH = type === 'volatility' ? 3.5 : 2.5;
        const normalized = (height - minH) / (maxH - minH);
        const clamped = Math.max(0, Math.min(1, normalized));
        
        if (clamped < 0.33) {
          const t = clamped / 0.33;
          colors[i] = t;
          colors[i + 1] = 0.8;
          colors[i + 2] = 0.2 * (1 - t);
        } else if (clamped < 0.66) {
          const t = (clamped - 0.33) / 0.33;
          colors[i] = 1;
          colors[i + 1] = 0.8 - t * 0.3;
          colors[i + 2] = 0;
        } else {
          const t = (clamped - 0.66) / 0.34;
          colors[i] = 1;
          colors[i + 1] = 0.5 - t * 0.5;
          colors[i + 2] = t * 0.2;
        }
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.geometry.attributes.color.needsUpdate = true;
      mesh.current.geometry.computeVertexNormals();
      
      wireframeMesh.current.geometry.attributes.position.needsUpdate = true;
      wireframeMesh.current.geometry.computeVertexNormals();
    }
  });
  
  return (
    <group position={[xOffset, 0, zOffset]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Solid surface */}
      <mesh ref={mesh} geometry={geometry}>
        <meshStandardMaterial
          vertexColors
          side={THREE.DoubleSide}
          metalness={0.3}
          roughness={0.7}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh ref={wireframeMesh} geometry={geometry}>
        <meshBasicMaterial
          color="#111111"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}


// Grid floor matching the image style
function GridFloor() {
  const mesh = useRef();
  const gridSize = 40;
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, gridSize, gridSize);
    return geo;
  }, [gridSize]);
  
  return (
    <mesh ref={mesh} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <meshBasicMaterial
        color="#333333"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// Axis labels and grid for volatility surface
function AxisLabels() {
  const strikes = [-4, -2, 0, 2, 4];
  const vols = [0, 1, 2, 3];
  const tenors = [-4, -2, 0, 2, 4];
  
  return (
    <>
      {/* X axis (Strike/Moneyness) */}
      <mesh position={[0, -3, 0]}>
        <boxGeometry args={[10, 0.03, 0.03]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
      <Text
        position={[0, -3, -6]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
        color="#aaaaaa"
        anchorX="center"
      >
        STRIKE / MONEYNESS
      </Text>
      {strikes.map((strike, i) => (
        <group key={`strike-${i}`}>
          <mesh position={[strike, -3, 0]}>
            <boxGeometry args={[0.02, 0.1, 0.02]} />
            <meshBasicMaterial color="#888888" />
          </mesh>
          <Text
            position={[strike, -3, -0.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.25}
            color="#888888"
            anchorX="center"
          >
            {strike === 0 ? 'ATM' : strike > 0 ? `+${strike * 10}%` : `${strike * 10}%`}
          </Text>
        </group>
      ))}
      
      {/* Y axis (Implied Vol) */}
      <mesh position={[-5, 0, 0]}>
        <boxGeometry args={[0.03, 6, 0.03]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
      <Text
        position={[-6.5, 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.4}
        color="#aaaaaa"
        anchorX="center"
      >
        IMPLIED VOL (%)
      </Text>
      {vols.map((vol, i) => (
        <group key={`vol-${i}`}>
          <mesh position={[-5, vol * 0.8 - 3, 0]}>
            <boxGeometry args={[0.1, 0.02, 0.02]} />
            <meshBasicMaterial color="#888888" />
          </mesh>
          <Text
            position={[-5.5, vol * 0.8 - 3, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.25}
            color="#888888"
            anchorX="center"
          >
            {Math.round(15 + vol * 10)}
          </Text>
        </group>
      ))}
      
      {/* Z axis (Time to Maturity) */}
      <mesh position={[0, -3, 0]}>
        <boxGeometry args={[0.03, 0.03, 10]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
      <Text
        position={[-6, -3, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        fontSize={0.4}
        color="#aaaaaa"
        anchorX="center"
      >
        TIME TO MATURITY
      </Text>
      {tenors.map((tenor, i) => (
        <group key={`tenor-${i}`}>
          <mesh position={[0, -3, tenor]}>
            <boxGeometry args={[0.02, 0.1, 0.02]} />
            <meshBasicMaterial color="#888888" />
          </mesh>
          <Text
            position={[-0.5, -3, tenor]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            fontSize={0.25}
            color="#888888"
            anchorX="center"
          >
            {tenor <= 0 ? `${Math.abs(tenor) * 30}D` : `${tenor * 30}D`}
          </Text>
        </group>
      ))}
    </>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
      
      {/* Single volatility surface - centered */}
      <VolatilitySurface xOffset={0} zOffset={0} type="volatility" />
      
      <GridFloor />
      <AxisLabels />
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={10}
        maxDistance={35}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}

// Main component
export default function ThreeJsPanel() {
  return (
    <div
      className="threejs-container"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <Canvas
        camera={{ position: [8, 6, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
