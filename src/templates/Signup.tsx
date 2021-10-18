import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signUp } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { Container } from '@material-ui/core'
import { PlaneLargeButton, Label, SimpleLink, TextInputStandard } from 'components/UIKit/index'
import { EmailRegExp, ErrorMessages } from 'utils/validation'

const Signup = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit, watch } = useForm<IFormInput>()

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

  const matchPassword = (val: string): boolean => {
    const password = watch('password')
    return val === password
  }

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Label label={'Sign up for your English Diary!'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
        <TextInputStandard
          control={control}
          fullWidth={false}
          name={'username'}
          rules={{
            required: ErrorMessages.required,
          }}
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
        <div className={'spacer-8'} />
        <TextInputStandard
          control={control}
          fullWidth={false}
          name={'passwordConfirm'}
          rules={{
            required: ErrorMessages.required,
            minLength: { value: 6, message: ErrorMessages.shortPassword },
            validate: { match: (val) => matchPassword(val) || ErrorMessages.unmatchPassword },
          }}
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
      </Container>
    </div>
  )
}

export default Signup
