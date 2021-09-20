import TextField from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'

type TextInputProps = {
  fullWidth: boolean
  label?: string
  multiline: boolean
  rows: number
  value: string
  type: 'text' | 'email' | 'password'
  className?: string
  placeholder?: string
  variant: 'outlined' | 'standard'
  required?: boolean
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const TextInput = (props: TextInputProps): JSX.Element => {
  return (
    <TextField
      className={props.className}
      fullWidth={props.fullWidth}
      label={props.label}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      variant={props.variant}
      required={props.required}
    />
  )
}

export default TextInput
