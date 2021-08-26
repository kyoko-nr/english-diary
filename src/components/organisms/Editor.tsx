import OneLineInput from 'components/atoms/OneLineInput'
import MultiLineInput from 'components/atoms/MultiLineInput'
import ButtonComponent from 'components/atoms/ButtonComponent'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3),
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(3),
      },
    },
  })
)

const Editor = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Typography variant="h5">2021/8/26</Typography>
      <OneLineInput title="Title" placeHolder="Title of your diary"></OneLineInput>
      <MultiLineInput title="" placeHolder="Describe your day here!" rows={20}></MultiLineInput>
      <ButtonComponent size="large" title="Submit" onClick={() => console.log('submit')}></ButtonComponent>
    </div>
  )
}

export default Editor
