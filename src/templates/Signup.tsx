import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Container } from '@material-ui/core'
import { StandardTextInput, PlaneLargeButton, Label, SimpleLink } from 'components/UIKit/index'

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
        <Label label={'Sign up for your English Diary!'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
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
        <div className={'spacer-8'} />
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
        <div className={'spacer-8'} />
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
        <div className={'spacer-8'} />
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
        <div className={'spacer-16'} />
        <PlaneLargeButton
          label={'sign up'}
          onClick={() => dispatch(signUp({ username, email, password, passwordConfirm }))}
        />
        <div className={'spacer-16'} />
        <SimpleLink
          label={'Go to sign in page'}
          component={'button'}
          onClick={() => dispatch(push('/signin'))}
          color={'textPrimary'}
          variant={'body2'}
        />
      </Container>
    </div>
  )
}

export default Signup
