import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import { TextInput, PlaneLargeButton } from 'components/UIKit/index'

import { signUp } from 'reducks/users/operations'

const Signup = (): JSX.Element => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value)
    },
    [setUsername]
  )

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

  const inputPasswordConfirm = useCallback(
    (event) => {
      setPasswordConfirm(event.target.value)
    },
    [setPasswordConfirm]
  )

  return (
    <div className={'signup'}>
      <Container maxWidth="lg">
        <Typography className={'signup-title'} component="h2" variant="h4">
          Sign up for your English Diary!
        </Typography>
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'User name'}
          multiline={false}
          rows={1}
          type={'text'}
          value={username}
          onChange={inputUsername}
          variant={'standard'}
          required={true}
        />
        <TextInput
          className={'signup-input'}
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
          className={'signup-input'}
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
        <TextInput
          className={'signup-input'}
          fullWidth={false}
          label={'Password to confirm'}
          multiline={false}
          rows={1}
          type={'password'}
          value={passwordConfirm}
          onChange={inputPasswordConfirm}
          variant={'standard'}
          required={true}
        />
        <PlaneLargeButton
          label={'sign up'}
          onClick={() => dispatch(signUp({ username, email, password, passwordConfirm }))}
        />
      </Container>
    </div>
  )
}

export default Signup
