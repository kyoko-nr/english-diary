import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { updateUserAccount, changeLoadingState } from 'reducks/users/operations'
import { useForm } from 'react-hook-form'
import { OutlineMidButton, ContainedMidButton, TextInputOutlined, Label } from 'components/UIKit/index'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  isPasswordChanged: yup.boolean(),
  username: yup.string().label('User name').required(),
  email: yup.string().label('Email').required().email(),
  password: yup
    .string()
    .label('Password')
    .when('isPasswordChanged', {
      is: true,
      then: yup.string().required().min(6),
    }),
})

type MyPageEditFormProps = {
  username: string
  email: string
}

const MyPageEditForm = (props: MyPageEditFormProps): JSX.Element => {
  const dispatch = useDispatch()
  const [isPasswordChanged, setIsPasswordChanged] = useState(false)
  const { control, handleSubmit, setValue, watch } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  interface IFormInput {
    username: string
    email: string
    password?: string
    isPasswordChanged: boolean
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(changeLoadingState(true))
    dispatch(updateUserAccount(data.email, data.username, data.password))
  }

  useEffect(() => {
    setValue('username', props.username)
    setValue('email', props.email)
  }, [])

  useEffect(() => {
    const inputEmail = watch('email')
    const result = inputEmail !== props.email
    setValue('isPasswordChanged', result)
    setIsPasswordChanged(result)
  }, [watch('email')])

  return (
    <>
      <TextInputOutlined
        control={control}
        fullWidth={true}
        name={'username'}
        defaultValue={''}
        label={'User name'}
        type={'text'}
        required={true}
        multiline={false}
        rows={0}
      />
      <div className={'spacer-8'} />
      <TextInputOutlined
        control={control}
        fullWidth={true}
        name={'email'}
        defaultValue={''}
        label={'Email'}
        type={'email'}
        required={true}
        multiline={false}
        rows={0}
      />
      {isPasswordChanged && (
        <>
          <div className={'spacer-8'} />
          <Label label={'Enter password to update email.'} variant={'body2'} align={'left'} />
          <div className={'spacer-8'} />
          <TextInputOutlined
            control={control}
            fullWidth={true}
            name={'password'}
            defaultValue={''}
            label={'Password'}
            type={'password'}
            required={true}
            multiline={false}
            rows={0}
          />
        </>
      )}

      <div className={'spacer-40'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'cancel'} color={'inherit'} onClick={() => dispatch(push('/mypage'))} />
        <ContainedMidButton label={'save'} color={'primary'} onClick={handleSubmit(onSubmit)} />
      </div>
    </>
  )
}

export default MyPageEditForm
