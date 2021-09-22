import { useState, useCallback, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Container } from '@material-ui/core'
import { StandardTextInput, PlaneLargeButton, SimpleLink, Label } from 'components/UIKit/index'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three'

import { signIn } from 'reducks/users/operations'

const signin = (): JSX.Element => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value)
    },
    [setEmail]
  )

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value)
    },
    [setPassword]
  )

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

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Label label={'English Diary'} variant={'h4'} align={'center'} />
        {/**
         * three js *
         */}
        <div id="canvas-container">
          <Canvas>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight intensity={3}></directionalLight>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
        {/**
         * three js *
         */}
        <StandardTextInput
          fullWidth={false}
          label={'Email'}
          multiline={false}
          rows={1}
          type={'email'}
          value={email}
          onChange={inputEmail}
          required={true}
        />
        <div className={'spacer-8'}></div>
        <StandardTextInput
          fullWidth={false}
          label={'Password'}
          multiline={false}
          rows={1}
          type={'password'}
          value={password}
          onChange={inputPassword}
          required={true}
        />
        <div className={'spacer-16'}></div>
        <SimpleLink
          label={'Forgot your password?'}
          component={'button'}
          onClick={() => dispatch(push('/signin/reset'))}
          color={'textPrimary'}
          variant={'body2'}
        />
        <PlaneLargeButton label={'sign in'} onClick={() => dispatch(signIn({ email, password }))} />
        <div className={'spacer-16'}></div>
        <SimpleLink
          label={'sign up'}
          component={'button'}
          onClick={() => dispatch(push(`/signup`))}
          color={'primary'}
          upperCase={true}
          variant={'body1'}
        />
      </Container>
    </div>
  )
}

export default signin
