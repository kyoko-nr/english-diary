import { Container } from '@material-ui/core'
import { Logo } from 'components/UIKit/index'
import { SignInForm } from 'components'
import { Scene } from 'components/three'

const signin = (): JSX.Element => {
  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Logo variant={'h4'} component={'h1'} />
        <Scene />
        <SignInForm />
      </Container>
    </div>
  )
}

export default signin
