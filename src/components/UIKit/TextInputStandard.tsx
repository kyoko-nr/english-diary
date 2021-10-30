import { createStyles, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Controller, FieldValues, useController, FieldName, Control } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>
  required: boolean
  defaultValue: unknown
  control?: any
  // control?: Control<T, Record<string, unknown>> | undefined
  fullWidth: boolean
  label: string
  type: 'text' | 'email' | 'password'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 400,
      width: '80%',
    },
  })
)

const TextInputStandard = (props: InputProps): JSX.Element => {
  const classes = useStyles()
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
          variant={'standard'}
          className={classes.root}
          helperText={message}
          fullWidth={props.fullWidth}
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
