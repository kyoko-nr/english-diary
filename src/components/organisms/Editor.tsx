import TextField from '@material-ui/core/TextField'
import Input from '../atoms/Input'

const Editor = (): JSX.Element => {
  return (
    <>
      <TextField label="Title" placeholder="Title of your diary" variant="outlined" fullWidth />
      <TextField label="" placeholder="Describe your day here!" variant="outlined" fullWidth multiline rows={10} />
    </>
  )
}

export default Editor
