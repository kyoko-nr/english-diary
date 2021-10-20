import { createStyles, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Controller, FieldValues, useController, RegisterOptions, FieldName, Control } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>
  rules?: Exclude<RegisterOptions, 'setValueAs'>
  required: boolean
  defaultValue: unknown
  control?: any
  // control?: Control<T, Record<string, unknown>> | undefined
  fullWidth: boolean
  label: string
  multiline: boolean
  rows: number
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: 8,
    },
  })
)

const TextInputOutlined = (props: InputProps): JSX.Element => {
  const classes = useStyles()
  const { fieldState } = useController(props)
  const message = fieldState.error ? fieldState.error.message : ' '

  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      rules={{ ...props.rules }}
      render={({ field }) => (
        <TextField
          {...field}
          variant={'outlined'}
          className={classes.root}
          helperText={message}
          fullWidth={props.fullWidth}
          error={fieldState.invalid}
          label={props.label}
          multiline={props.multiline}
          rows={props.rows}
          required={props.required}
          type={'text'}
        />
      )}
    />
  )
}

export default TextInputOutlined
