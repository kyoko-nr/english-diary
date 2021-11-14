import { RouteComponentProps } from 'react-router'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Container } from '@material-ui/core'
import { Label, TextLargeButton } from 'components/UIKit/index'

type ErrorProps = RouteComponentProps<{
  id: string
}>

const Error = (props: ErrorProps): JSX.Element => {
  const dispatch = useDispatch()
  const errorId = props.match.params.id
  let error
  for (const [key, val] of Object.entries(Errors)) {
    error = key === errorId && val
  }

  return (
    <div className={'full-window bg-yellow flex flex-column'}>
      <Container maxWidth="lg">
        <Label label={error ? error.title : 'Unknow Error'} variant={'h4'} align={'center'} />
        <div className={'spacer-40'} />
        {error && (
          <>
            <div>{error.desc}</div>
            <div className={'spacer-40'} />
          </>
        )}
        <TextLargeButton label={'go to sign in page'} onClick={() => dispatch(push(`/signin`))} color={'primary'} />
      </Container>
    </div>
  )
}

const Errors = {
  '001': {
    state: 'NO_USERS_STATE',
    title: 'Something wrong with your account',
    desc: 'Recreate an account or contact to customer service.',
  },
  '002': {
    state: 'UNABLE_TO_CREATE_ACCOUNT',
    title: 'Unable to create your account',
    desc: 'Please try again.',
  },
}

export default Error
