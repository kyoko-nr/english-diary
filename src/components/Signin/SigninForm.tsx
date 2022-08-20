import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { clearErrors } from 'reducks/errors/operations'
import { push } from 'connected-react-router'
import { signIn } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import {
  PlaneLargeButton,
  SimpleLink,
  TextLargeButton,
  TextInputStandard,
  XsColumnGridContainer,
} from 'components/UIKit/index'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  email: yup.string().label('Email').required().email(),
  password: yup.string().label('Password').required().min(6),
})

const SigninForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  interface IFormInput {
    email: string
    password: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(clearErrors())
    dispatch(changeLoadingState(true))
    dispatch(signIn({ email: data.email, password: data.password }))
  }

  return (
    <>
      <XsColumnGridContainer>
        <TextInputStandard
          control={control}
          name={'email'}
          defaultValue={''}
          label={'Email'}
          type={'email'}
          required={true}
        />
        <TextInputStandard
          control={control}
          name={'password'}
          defaultValue={''}
          label={'Password'}
          type={'password'}
          required={true}
        />
      </XsColumnGridContainer>
      <div className={'spacer-16'} />
      <SimpleLink
        label={'Forgot your password?'}
        onClick={() => dispatch(push('/signin/reset'))}
        color={'textPrimary'}
        variant={'body2'}
      />
      <div className={'spacer-32'} />
      <PlaneLargeButton label={'sign in'} onClick={handleSubmit(onSubmit)} />
      <div className={'spacer-16'} />
      <TextLargeButton label={'sign up'} onClick={() => dispatch(push('/signup'))} color={'primary'} />
    </>
  )
}

export default SigninForm
