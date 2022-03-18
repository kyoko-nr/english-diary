import { createStyles, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Controller, FieldValues, useController, FieldName } from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>
  required: boolean
  defaultValue: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  fullWidth: boolean
  multiline: boolean
  rows: number
  type: 'text'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      ' & label.MuiFormLabel-roo': {
        fontSize: '14px',
        transform: 'translate(14px, 14px)',
      },
      ' & .MuiInputBase-root': {
        ' & input': {
          padding: '12px',
          fontSize: '14px',
        },
      },
    },
  })
)

const TextInputOutlinedThin = (props: InputProps): JSX.Element => {
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
          variant={'outlined'}
          className={classes.root}
          helperText={message}
          fullWidth={props.fullWidth}
          error={fieldState.invalid}
          multiline={props.multiline}
          rows={props.rows}
          required={props.required}
          type={props.type}
        />
      )}
    />
  )
}

export default TextInputOutlinedThin
