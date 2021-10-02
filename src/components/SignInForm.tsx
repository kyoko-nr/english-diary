import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signIn } from 'reducks/users/operations'
import { StandardTextInput, PlaneLargeButton, SimpleLink, TextLargeButton } from 'components/UIKit/index'

const SignInForm = (): JSX.Element => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmail = useCallback((event) => setEmail(event.target.value), [setEmail])
  const inputPassword = useCallback((event) => setPassword(event.target.value), [setPassword])

  return (
    <>
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
      <div className={'spacer-16'} />
      <SimpleLink
        label={'Forgot your password?'}
        component={'button'}
        onClick={() => dispatch(push('/signin/reset'))}
        color={'textPrimary'}
        variant={'body2'}
      />
      <PlaneLargeButton label={'sign in'} onClick={() => dispatch(signIn({ email, password }))} />
      <div className={'spacer-16'} />
      <TextLargeButton label={'sign up'} onClick={() => dispatch(push(`/signup`))} color={'primary'} />
    </>
  )
}

export default SignInForm
