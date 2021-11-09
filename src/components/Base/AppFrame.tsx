import { ReactNode } from 'react'
import { Container } from '@material-ui/core'
import { ErrorPopup } from 'components/Base/index'
import { Header } from 'components/Navs/index'

type AppFrameProps = {
  children: ReactNode
}

const AppFrame = (props: AppFrameProps): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <ErrorPopup />
        {props.children}
      </Container>
    </>
  )
}

export default AppFrame
