import { Canvas } from '@react-three/fiber'
import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'

function Dots() {
  const ref = useRef()
  useLayoutEffect(() => {
    const transform = new THREE.Matrix4()
    for (let i = 0; i < 10000; ++i) {
      const x = (i % 100) - 50
      const y = Math.floor(i / 100) - 50
      transform.setPosition(x, y, 0)
      ref.current.setMatrixAt(i, transform)
    }
  }, [])
  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.15]} />
      <meshBasicMaterial />
    </instancedMesh>
  )
}

export default function App() {

  return (
    <Canvas orthographic camera={{ zoom: 20 }} colorManagement={false}>
      <color attach="background" args={['black']} />
      <Dots />
    </Canvas>
  )
}

