import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { IconButton } from '@mui/material'
import { Feature } from 'reducks/users/types'

type AddIconButtonProps = {
  feature: Feature
  onClick: (feature: Feature) => void
}
const AddIconButton = (props: AddIconButtonProps): JSX.Element => {
  return (
    <IconButton onClick={() => props.onClick(props.feature)} color={'primary'} size="small">
      <AddCircleOutlineIcon />
    </IconButton>
  )
}

export default AddIconButton
