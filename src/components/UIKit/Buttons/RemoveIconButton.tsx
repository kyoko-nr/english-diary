import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { IconButton } from '@mui/material'
import { Feature } from 'types/types'

type RemoveIconButtonProps = {
  feature: Feature
  id: string
  onClick: (feature: Feature, id: string) => void
}
const RemoveIconButton = (props: RemoveIconButtonProps): JSX.Element => {
  return (
    <IconButton onClick={() => props.onClick(props.feature, props.id)} color={'error'} size="small">
      <RemoveCircleOutlineIcon />
    </IconButton>
  )
}

export default RemoveIconButton
