import { TextField, Box } from '@mui/material'
import { RemoveIconButton } from 'components/UIKit/index'
import { Controller, FieldValues, FieldName } from 'react-hook-form'
import { Feature } from 'types/types'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  feature: Feature
  name: FieldName<TFieldValues>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  fullWidth: boolean
  onDelete: (feature: Feature, index: number) => void
  index: number
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
        <RemoveIconButton feature={props.feature} index={props.index} onClick={props.onDelete} />
      </Box>
    </Box>
  )
}

export default TextInputDeletable
