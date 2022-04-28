import { ReactNode } from 'react'
import { Container } from '@mui/material'
import { ErrorPopup } from 'components/Base/index'
import { Header } from 'components/Navs/index'

type AppFrameProps = {
  children: ReactNode
  maxWidth: 'sm' | 'md' | 'lg'
}

const AppFrame = (props: AppFrameProps): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxWidth={props.maxWidth} className={'content'}>
        <ErrorPopup />
        {props.children}
      </Container>
    </>
  )
}

export default AppFrame
