import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Diary } from 'reducks/users/types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { createStyles, makeStyles } from '@material-ui/styles'

type ArchiveProps = {
  diary: Diary
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      boxShadow: 'none',
    },
    cardContent: {
      padding: 16,
      borderBottom: '1px solid #4a4a4a',
    },
    date: {
      fontSize: 12,
      marginBottom: 4,
    },
    title: {
      fontSize: 16,
      marginBottom: 4,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    content: {
      fontSize: 14,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  })
)

const Archive = (props: ArchiveProps): JSX.Element => {
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <CardActionArea component="a" onClick={() => dispatch(push(`/post/${props.diary.id}`))}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.date}>{props.diary.date}</div>
          <h2 className={classes.title}>{props.diary.title}</h2>
          <div className={classes.content}>{props.diary.content}</div>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
