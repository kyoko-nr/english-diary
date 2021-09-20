import { useState, useEffect, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import ReactDOM from 'react-dom'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import { Container, Typography, Link, Button } from '@material-ui/core'

import { TextInput } from 'components/index'
import { InputFunction } from 'types/TypeList'
import { AnimationMixer } from 'three'

const Login = (): JSX.Element => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail: InputFunction = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword: InputFunction = (event) => {
    setPassword(event.target.value)
  }

  const Model = (): JSX.Element => {
    const gltf = useLoader(GLTFLoader, '/model_nodraco.glb')
    console.log(gltf)
    // const mixer = new AnimationMixer(gltf.scene)
    // const action = mixer.clipAction(gltf.animations[1])
    // action.play()
    return <primitive object={gltf.scene} dispose={null} position={[0, -2, 0]} scale={1} />
  }

  return (
    <div className={'login'}>
      <Container maxWidth="lg">
        <Typography className={'login-title'} component="h1" variant="h4">
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
          className={'login-input'}
          fullWidth={false}
          label={'Email'}
          multiline={false}
          rows={1}
          type={'email'}
          value={email}
          onChange={handleEmail}
          variant={'standard'}
        />
        <TextInput
          className={'login-input'}
          fullWidth={false}
          label={'Password'}
          multiline={false}
          rows={1}
          type={'password'}
          value={password}
          onChange={handlePassword}
          variant={'standard'}
        />
        <Link className={'login-forgot'} component={'button'} onClick={() => console.log('forgot')} color={'inherit'}>
          Forgot your password?
        </Link>
        <Button className={'login-submit'} onClick={() => console.log('sign in')}>
          sign in
        </Button>
        <Link
          className={'login-signup'}
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

export default Login
