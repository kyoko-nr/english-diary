import { useState, useCallback, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Container, Typography, Link } from '@material-ui/core'

import { TextInput, PlaneLargeButton } from 'components/UIKit/index'
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
    // const mixer = new AnimationMixer(gltf.scene)
    // const action = mixer.clipAction(gltf.animations[1])
    // action.play()
    return <primitive object={gltf.scene} dispose={null} position={[0, -2, 0]} scale={1} />
  }

  return (
    <div className={'signin'}>
      <Container maxWidth="lg">
        <Typography className={'signin-title'} component="h1" variant="h4">
          English Diary
        </Typography>
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
        <TextInput
          className={'signin-input'}
          fullWidth={false}
          label={'Email'}
          multiline={false}
          rows={1}
          type={'email'}
          value={email}
          onChange={inputEmail}
          variant={'standard'}
          required={true}
        />
        <TextInput
          className={'signin-input'}
          fullWidth={false}
          label={'Password'}
          multiline={false}
          rows={1}
          type={'password'}
          value={password}
          onChange={inputPassword}
          variant={'standard'}
          required={true}
        />
        <Link className={'signin-forgot'} component={'button'} onClick={() => console.log('forgot')} color={'inherit'}>
          Forgot your password?
        </Link>
        <PlaneLargeButton label={'sign in'} onClick={() => dispatch(signIn({ email, password }))} />
        <Link
          className={'signin-signup'}
          component={'button'}
          onClick={() => dispatch(push(`/signup`))}
          color={'initial'}
        >
          sign up
        </Link>
      </Container>
    </div>
  )
}

export default signin
