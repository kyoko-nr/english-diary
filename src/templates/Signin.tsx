import { Container } from '@material-ui/core'
import { Logo } from 'components/UIKit/index'
import { SigninForm } from 'components/Signin/index'
import { Scene } from 'components/three/index'

const signin = (): JSX.Element => {
  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Logo variant={'h4'} component={'h1'} />
        <Scene />
        <SigninForm />
      </Container>
    </div>
  )
}

export default signin
