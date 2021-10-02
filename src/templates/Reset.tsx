import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Container } from '@material-ui/core'
import { SimpleLink, PlaneLargeButton, StandardTextInput, Label } from 'components/UIKit/index'

import { resetPassword } from 'reducks/users/operations'

const Reset = (): JSX.Element => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value)
    },
    [setEmail]
  )

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Label label={'Reset your password'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
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
        <PlaneLargeButton label={'send email'} onClick={() => dispatch(resetPassword(email))} />
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
