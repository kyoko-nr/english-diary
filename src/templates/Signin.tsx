import { Container } from '@material-ui/core'
import { Logo } from 'components/UIKit/index'
import { SigninForm } from 'components/Signin/index'
import { Scene } from 'components/three/index'
import { useSelector } from 'react-redux'
import { getErrors } from 'reducks/errors/selectors'

const signin = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const msgs = getErrors(selector)
  const errors = msgs.errorMsgs

  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <Logo variant={'h4'} component={'h1'} />
        <Scene />
        {errors &&
          errors.length > 0 &&
          errors.map((value: string) => {
            return <div>{value}</div>
          })}
        <SigninForm />
      </Container>
    </div>
  )
}

export default signin
