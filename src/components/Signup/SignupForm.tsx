import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signUp } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { PlaneLargeButton, Label, SimpleLink, TextInputStandard } from 'components/UIKit/index'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  username: yup.string().label('User name').required(),
  email: yup.string().label('Email').required().email(),
  password: yup.string().label('Password').required().min(6),
  passwordConfirm: yup
    .string()
    .label('Password confirm')
    .oneOf([yup.ref('password')], "passwords don't match")
    .required()
    .min(6),
})

const SignupForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  interface IFormInput {
    username: string
    email: string
    password: string
    passwordConfirm: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(
      signUp({
        username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      })
    )
  }

  return (
    <>
      <Label label={'Sign up for your English Diary!'} variant={'h4'} align={'center'} />
      <div className={'spacer-40'} />
      <TextInputStandard
        control={control}
        fullWidth={false}
        name={'username'}
        defaultValue={''}
        label={'User name'}
        type={'text'}
        required={true}
      />
      <div className={'spacer-8'} />
      <TextInputStandard
        control={control}
        fullWidth={false}
        name={'email'}
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
        defaultValue={''}
        label={'Password'}
        type={'password'}
        required={true}
      />
      <div className={'spacer-8'} />
      <TextInputStandard
        control={control}
        fullWidth={false}
        name={'passwordConfirm'}
        defaultValue={''}
        label={'Password to confirm'}
        type={'password'}
        required={true}
      />
      <div className={'spacer-16'} />
      <PlaneLargeButton label={'sign up'} onClick={handleSubmit(onSubmit)} />
      <div className={'spacer-16'} />
      <SimpleLink
        label={'Go to sign in page'}
        component={'button'}
        onClick={() => dispatch(push('/signin'))}
        color={'textPrimary'}
        variant={'body2'}
      />
    </>
  )
}

export default SignupForm
