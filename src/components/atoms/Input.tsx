import TextField from '@material-ui/core/TextField'

type InputProps = {
  title: string
  placeHolder: string
  multiline: boolean
  rows?: number
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <TextField
      label={props.title}
      variant="outlined"
      placeholder={props.placeHolder}
      fullWidth
      {...(props.multiline ? 'multiline' : '')}
      rows={props.rows}
    />
  )
}
export default Input
