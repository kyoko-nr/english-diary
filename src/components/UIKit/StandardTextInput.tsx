import { createStyles, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { ChangeEvent } from 'react'

type StandardTextInputProps = {
  fullWidth: boolean
  label?: string
  multiline: boolean
  rows: number
  value: string
  type: 'text' | 'email' | 'password'
  placeholder?: string
  required?: boolean
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
    />
  )
}

export default StandardTextInput
