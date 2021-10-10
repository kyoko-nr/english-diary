import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './index'

const Scene = (): JSX.Element => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.2} position={[0, 0, 6]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
