import { TextField, Box } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { Addible } from 'reducks/users/types'

type TextInputDeletableProps = {
  content: Addible
  fullWidth: boolean
  onDelete: (id: string) => void
}

const TextInputDeletable = (props: TextInputDeletableProps): JSX.Element => {
  return (
    <Box sx={{ display: props.fullWidth ? 'block' : 'inline-block' }}>
      <Box sx={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
        <TextField variant="standard" required={false} fullWidth={props.fullWidth} defaultValue={props.content.value} />
        <ClearIcon cursor="pointer" fontSize="small" color="error" onClick={() => props.onDelete(props.content.id)} />
      </Box>
    </Box>
  )
}

export default TextInputDeletable
