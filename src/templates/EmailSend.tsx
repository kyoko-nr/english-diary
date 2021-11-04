import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Container } from '@material-ui/core'
import { SimpleLink, TextLargeButton, Label } from 'components/UIKit/index'

const EmailSend = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Label label={'Email was sent!'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
        <TextLargeButton label={'sign in page'} onClick={() => dispatch(push('/signin'))} color={'primary'} />
        <div className={'spacer-16'} />
        <SimpleLink
          label={"Haven't received an email? Sned it again!"}
          component={'button'}
          onClick={() => dispatch(push('/signin/reset'))}
          color={'textPrimary'}
          variant={'body2'}
        />
      </Container>
    </div>
  )
}

export default EmailSend
