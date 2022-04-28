import { Container } from '@mui/material'
import { ErrorPopup } from 'components/Base/index'
import { ReactNode } from 'react'

type BaseFrameProps = {
  children: ReactNode
}

const BaseFrame = (props: BaseFrameProps): JSX.Element => {
  return (
    <div className={'full-window bg-yellow flex-column'}>
      <Container maxWidth="lg">
        <ErrorPopup />
        {props.children}
      </Container>
    </div>
  )
}

export default BaseFrame
