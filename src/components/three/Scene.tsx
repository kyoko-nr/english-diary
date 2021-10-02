import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './index'

const Scene = (): JSX.Element => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={1}></ambientLight>
        <directionalLight intensity={3}></directionalLight>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
