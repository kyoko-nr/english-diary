import { useState } from 'react'

import { Container, Typography, Link, Button } from '@material-ui/core'

import { TextInput } from 'components/index'
import { InputFunction } from 'types/TypeList'

const SigninPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail: InputFunction = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword: InputFunction = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className={'signin'}>
      <Container maxWidth="lg">
        <Typography className={'signin-title'} component="h1" variant="h4">
          English Diary
        </Typography>
        <TextInput
          className={'signin-input'}
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
          className={'signin-input'}
          fullWidth={false}
          label={'Password'}
          multiline={false}
          rows={1}
          type={'password'}
          value={password}
          onChange={handlePassword}
          variant={'standard'}
        />
        <Link className={'signin-forgot'} href={'#'} color={'inherit'}>
          Forgot your password?
        </Link>
        <Button className={'signin-submit'} onClick={() => console.log('sign in')}>
          sign in
        </Button>
        <Link className={'signin-signup'} href={'#'} color={'initial'}>
          sign up
        </Link>
      </Container>
    </div>
  )
}

export default SigninPage
