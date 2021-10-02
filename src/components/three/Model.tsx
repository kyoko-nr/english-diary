import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three'

const Model = (): JSX.Element => {
  const gltf = useLoader(GLTFLoader, '/model_nodraco.glb')
  const mixer = new AnimationMixer(gltf.scene)
  if (mixer) {
    gltf.animations.forEach((animation) => {
      const action = mixer.clipAction(animation)
      action.play()
    })
  }

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <primitive object={gltf.scene} dispose={null} position={[0, -2, 0]} scale={1} />
}

export default Model
