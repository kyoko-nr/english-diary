import TextField from '@material-ui/core/TextField'

type OneLineInputProps = {
  title: string
  placeHolder: string
}

const OneLineInput = (props: OneLineInputProps): JSX.Element => {
  return <TextField label={props.title} variant="outlined" placeholder={props.placeHolder} fullWidth />
}
export default OneLineInput
