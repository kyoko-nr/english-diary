import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import { TextInput, PlaneLargeButton } from 'components/UIKit/index'

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
    <div className={'reset'}>
      <Container maxWidth="lg">
        <Typography className={'reset-title'} component="h2" variant="h4">
          Reset your password
        </Typography>
        <TextInput
          className={'reset-input'}
          fullWidth={false}
          label={'Email'}
          multiline={false}
          rows={1}
          type={'email'}
          value={email}
          onChange={inputEmail}
          variant={'standard'}
          required={true}
        />
        <PlaneLargeButton label={'send email'} onClick={() => dispatch(resetPassword(email))} />
      </Container>
    </div>
  )
}

export default Reset
