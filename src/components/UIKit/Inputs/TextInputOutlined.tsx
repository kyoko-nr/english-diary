import { TextField } from '@mui/material'
import { Controller, FieldValues, useController, FieldName } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>
  required: boolean
  defaultValue: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  fullWidth: boolean
  label: string
  multiline: boolean
  rows: number
  type: 'text' | 'email' | 'password'
}

const TextInputOutlined = (props: InputProps): JSX.Element => {
  const { fieldState } = useController(props)
  const message = fieldState.error ? fieldState.error.message : ' '

  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant={'outlined'}
          helperText={message}
          fullWidth={props.fullWidth}
          error={fieldState.invalid}
          label={props.label}
          multiline={props.multiline}
          rows={props.rows}
          required={props.required}
          type={props.type}
          sx={{ borderRadius: 8, lineHeight: '1.4em' }}
        />
      )}
    />
  )
}

export default TextInputOutlined
