import { TextField } from '@mui/material'
import { Controller, FieldValues, useController, FieldName } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>
  required: boolean
  defaultValue: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  label: string
  type: 'text' | 'email' | 'password'
}

const TextInputStandard = (props: InputProps): JSX.Element => {
  const { fieldState } = useController(props)
  const message = props.required ? (fieldState.error ? fieldState.error.message : ' ') : ''

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
          fullWidth={true}
          error={fieldState.invalid}
          label={props.label}
          required={props.required}
          type={props.type}
        />
      )}
    />
  )
}

export default TextInputStandard
