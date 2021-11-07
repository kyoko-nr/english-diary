import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { BaseFrame } from 'components/Base/index'
import { SimpleLink, TextLargeButton, Label } from 'components/UIKit/index'

const EmailSend = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <BaseFrame>
      <Label label={'Email was sent!'} variant={'h4'} align={'center'} />
      <div className={'spacer-40'} />
      <TextLargeButton label={'sign in page'} onClick={() => dispatch(push('/signin'))} color={'primary'} />
      <div className={'spacer-16'} />
      <SimpleLink
        label={"Haven't received an email? Send it again!"}
        component={'button'}
        onClick={() => dispatch(push('/signin/reset'))}
        color={'textPrimary'}
        variant={'body2'}
      />
    </BaseFrame>
  )
}

export default EmailSend
