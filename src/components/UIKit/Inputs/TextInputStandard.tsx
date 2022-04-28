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
  noError?: boolean
  type: 'text' | 'email' | 'password'
}

const TextInputStandard = (props: InputProps): JSX.Element => {
  const { fieldState } = useController(props)
  const message = fieldState.error ? fieldState.error.message : props.noError ? '' : ' '

  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant={'standard'}
          helperText={message}
          fullWidth={props.fullWidth}
          error={fieldState.invalid}
          label={props.label}
          required={props.required}
          type={props.type}
          sx={{ maxWidth: 400, width: '80%' }}
        />
      )}
    />
  )
}

export default TextInputStandard
