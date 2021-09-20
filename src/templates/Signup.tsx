import { useState } from 'react'
import { Container, Typography, Link, Button } from '@material-ui/core'
import { TextInput } from 'components/index'
import { InputFunction } from 'types/TypeList'

const Signup = (): JSX.Element => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleUsername: InputFunction = (event) => {
    setUsername(event.target.value)
  }

  const handleEmail: InputFunction = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword: InputFunction = (event) => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirm: InputFunction = (event) => {
    setPasswordConfirm(event.target.value)
  }

  return (
    <div className={'signup'}>
      <Container maxWidth="lg">
        {/* <Typography className={'signup-title'} component="h1" variant="h4">
          Sign up
        </Typography> */}
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'User name *'}
          multiline={false}
          rows={1}
          type={'text'}
          value={username}
          onChange={handleUsername}
          variant={'standard'}
        />
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'Email *'}
          multiline={false}
          rows={1}
          type={'email'}
          value={email}
          onChange={handleEmail}
          variant={'standard'}
        />
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'Password *'}
          multiline={false}
          rows={1}
          type={'password'}
          value={password}
          onChange={handlePassword}
          variant={'standard'}
        />
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'Password to confirm *'}
          multiline={false}
          rows={1}
          type={'password'}
          value={passwordConfirm}
          onChange={handlePasswordConfirm}
          variant={'standard'}
        />
        <Button className={'signup-submit'} onClick={() => console.log('sign in')}>
          sign up
        </Button>
      </Container>
    </div>
  )
}

export default Signup
