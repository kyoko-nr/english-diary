import { Container } from '@material-ui/core'
import { SignupForm } from 'components/Signup/index'

const Signup = (): JSX.Element => {
  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <SignupForm />
      </Container>
    </div>
  )
}

export default Signup
