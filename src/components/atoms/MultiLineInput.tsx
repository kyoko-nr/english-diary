import TextField from '@material-ui/core/TextField'

type MultiLineInputProps = {
  title: string
  placeHolder: string
  rows: number
}

const OneLineInput = (props: MultiLineInputProps): JSX.Element => {
  return (
    <TextField
      label={props.title}
      variant="outlined"
      placeholder={props.placeHolder}
      fullWidth
      multiline
      rows={props.rows}
    />
  )
}
export default OneLineInput
