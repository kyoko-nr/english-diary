import { Container } from '@material-ui/core'
import { ResetForm } from 'components/Reset/index'

const Reset = (): JSX.Element => {
  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <ResetForm />
      </Container>
    </div>
  )
}

export default Reset
