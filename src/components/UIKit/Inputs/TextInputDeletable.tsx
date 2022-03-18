import { TextField, Box } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { Addible } from 'reducks/users/types'

type TextInputDeletableProps = {
  content: Addible
  onDelete: (id: string) => void
}

const TextInputDeletable = (props: TextInputDeletableProps): JSX.Element => {
  return (
    <Box sx={{ margin: '8px', display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="standard"
        required={false}
        fullWidth={true}
        defaultValue={props.content.value}
        color="primary"
      />
      <ClearIcon cursor="pointer" fontSize="small" color="error" onClick={() => props.onDelete(props.content.id)} />
    </Box>
  )
}

export default TextInputDeletable
