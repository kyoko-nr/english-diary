import { Box } from '@mui/material'
import { ErrorPopup } from 'components/Base/index'
import { ReactNode } from 'react'

type BaseFrameProps = {
  children: ReactNode
}

const BaseFrame = (props: BaseFrameProps): JSX.Element => {
  return (
    <Box
      className={'full-window bg-yellow'}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ErrorPopup />
      {props.children}
    </Box>
  )
}

export default BaseFrame
