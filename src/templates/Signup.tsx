import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import { StandardTextInput, PlaneLargeButton } from 'components/UIKit/index'

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
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h4">
          Sign up for your English Diary!
        </Typography>
        <div className={'spacer-32'}></div>
        <StandardTextInput
          fullWidth={false}
          label={'User name'}
          multiline={false}
          rows={1}
          type={'text'}
          value={username}
          onChange={inputUsername}
          required={true}
        />
        <div className={'spacer-8'}></div>
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
        <div className={'spacer-8'}></div>
        <StandardTextInput
          fullWidth={false}
          label={'Password to confirm'}
          multiline={false}
          rows={1}
          type={'password'}
          value={passwordConfirm}
          onChange={inputPasswordConfirm}
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
