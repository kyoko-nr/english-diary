import { createStyles, makeStyles } from '@material-ui/core'
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
  error?: boolean
  helperText?: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: 8,
    },
  })
)

const TextInput = (props: TextInputProps): JSX.Element => {
  const classes = useStyles()
  const helperText = props.error ? props.helperText : ' '

  return (
    <TextField
      className={classes.root}
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
      error={props.error}
      helperText={helperText}
    />
  )
}

export default TextInput
