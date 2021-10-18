import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { resetPassword } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { Container } from '@material-ui/core'
import { SimpleLink, PlaneLargeButton, Label, TextInputStandard } from 'components/UIKit/index'
import { EmailRegExp, ErrorMessages } from 'utils/validation'

const Reset = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>()

  interface IFormInput {
    email: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(resetPassword(data.email))
  }

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Label label={'Reset your password'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
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
        <PlaneLargeButton label={'send email'} onClick={handleSubmit(onSubmit)} />
        <div className={'spacer-16'} />
        <SimpleLink
          label={'Already have an account?'}
          component={'button'}
          onClick={() => dispatch(push('/signin'))}
          color={'textPrimary'}
          variant={'body2'}
        />
      </Container>
    </div>
  )
}

export default Reset
