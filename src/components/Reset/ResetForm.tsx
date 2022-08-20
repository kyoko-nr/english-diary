import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { resetPassword, changeLoadingState } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { SimpleLink, PlaneLargeButton, Label, TextInputStandard, XsColumnGridContainer } from 'components/UIKit/index'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  email: yup.string().label('Email').required().email(),
})

const ResetForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  interface IFormInput {
    email: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(changeLoadingState(true))
    dispatch(resetPassword(data.email))
  }

  return (
    <>
      <Label label={'Reset your password'} variant={'h4'} align={'center'} />
      <div className={'spacer-40'} />
      <XsColumnGridContainer>
        <TextInputStandard
          control={control}
          name={'email'}
          defaultValue={''}
          label={'Email'}
          type={'email'}
          required={true}
        />
      </XsColumnGridContainer>
      <div className={'spacer-32'} />
      <PlaneLargeButton label={'send email'} onClick={handleSubmit(onSubmit)} />
      <div className={'spacer-16'} />
      <SimpleLink
        label={'Already have an account?'}
        onClick={() => dispatch(push('/signin'))}
        color={'textPrimary'}
        variant={'body2'}
      />
    </>
  )
}

export default ResetForm
