import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { IconButton } from '@mui/material'

type RemoveIconButtonProps = {
  featureIndex: number
  onClick: (featureIndex: number) => void
}
const RemoveIconButton = (props: RemoveIconButtonProps): JSX.Element => {
  return (
    <IconButton onClick={() => props.onClick(props.featureIndex)} color={'error'} size="small">
      <RemoveCircleOutlineIcon />
    </IconButton>
  )
}

export default RemoveIconButton
