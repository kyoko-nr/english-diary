import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Diary } from 'Types/TypeList'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

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

const Viewer = (props: ViewerProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Typography variant="h5">{props.diary.date}</Typography>
      <Typography variant="h4" component="h2">
        {props.diary.title}
      </Typography>
      <div>{props.diary.content}</div>
      <Button size="large" variant="outlined" onClick={() => props.onDelete(props.diary.id)}>
        delete
      </Button>
      <Button size="large" variant="contained" href={`/edit/${props.diary.id}`}>
        edit
      </Button>
    </div>
  )
}

export default Viewer
