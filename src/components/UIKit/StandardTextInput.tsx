import { createStyles, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'

type StandardTextInputProps = {
  fullWidth: boolean
  multiline: boolean
  rows: number
  value: string
  type: 'text' | 'email' | 'password'
  label?: string
  placeholder?: string
  required?: boolean
  pattern?: string
  error?: boolean
  helperText?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 400,
    },
  })
)

const StandardTextInput = (props: StandardTextInputProps): JSX.Element => {
  const classes = useStyles()

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
      variant={'standard'}
      required={props.required}
      inputProps={{ pattern: props.pattern }}
      error={props.error}
      helperText={props.error ? props.helperText : null}
    />
  )
}

export default StandardTextInput
