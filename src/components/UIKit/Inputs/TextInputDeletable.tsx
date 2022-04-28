import { TextField, Box } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { Controller, FieldValues, FieldName } from 'react-hook-form'
import { Feature } from 'reducks/users/types'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  feature: Feature
  name: FieldName<TFieldValues>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  fullWidth: boolean
  onDelete: (feature: Feature, id: string) => void
  id: string
  value: string
}

const TextInputDeletable = (props: InputProps): JSX.Element => {
  return (
    <Box sx={{ display: props.fullWidth ? 'block' : 'inline-block' }}>
      <Box sx={{ marginLeft: '8px' }} className="flex-center">
        <Controller
          name={`${props.name}.value`}
          control={props.control}
          render={({ field }) => (
            <TextField {...field} variant="standard" required={false} fullWidth={props.fullWidth} />
          )}
        />
        <ClearIcon
          cursor="pointer"
          fontSize="small"
          color="error"
          onClick={() => props.onDelete(props.feature, props.id)}
        />
      </Box>
    </Box>
  )
}

export default TextInputDeletable
