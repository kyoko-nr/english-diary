import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { IconButton } from '@mui/material'
import { Feature } from 'types/types'

type RemoveIconButtonProps = {
  feature: Feature
  index: number
  onClick: (feature: Feature, index: number) => void
}
const RemoveIconButton = (props: RemoveIconButtonProps): JSX.Element => {
  return (
    <IconButton onClick={() => props.onClick(props.feature, props.index)} color={'error'} size="small">
      <RemoveCircleOutlineIcon />
    </IconButton>
  )
}

export default RemoveIconButton
