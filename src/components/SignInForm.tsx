import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signIn } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { PlaneLargeButton, SimpleLink, TextLargeButton, TextInputStandard } from 'components/UIKit/index'
import { EmailRegExp, ErrorMessages } from 'utils/validation'

const SignInForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>()

  interface IFormInput {
    email: string
    password: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(
      signIn({
        email: data.email,
        password: data.password,
      })
    )
  }

  return (
    <>
      <TextInputStandard
        control={control}
        fullWidth={false}
        name={'email'}
        rules={{
          required: ErrorMessages.required,
          pattern: { value: EmailRegExp, message: ErrorMessages.emailInvalid },
        }}
        defaultValue={''}
        label={'Email'}
        type={'email'}
        required={true}
      />
      <div className={'spacer-8'} />
      <TextInputStandard
        control={control}
        fullWidth={false}
        name={'password'}
        rules={{
          required: ErrorMessages.required,
          minLength: { value: 6, message: ErrorMessages.shortPassword },
        }}
        defaultValue={''}
        label={'Password'}
        type={'password'}
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
      <PlaneLargeButton label={'sign in'} onClick={handleSubmit(onSubmit)} />
      <div className={'spacer-16'} />
      <TextLargeButton label={'sign up'} onClick={() => dispatch(push(`/signup`))} color={'primary'} />
    </>
  )
}

export default SignInForm
