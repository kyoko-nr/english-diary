import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Diary } from 'reducks/users/types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { createStyles, makeStyles } from '@material-ui/styles'
import { FormatDate, WordChip } from '../UIKit/index'

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
      marginTop: 8,
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
          <FormatDate date={props.diary.date} format={'date'} variant={'caption'} align={'left'} />
          <h2 className={classes.title}>{props.diary.title}</h2>
          <div className={classes.content}>{props.diary.content}</div>
          {props.diary.words.length > 0 && (
            <>
              <div className="spacer-8" />
              <div className="wordchip-wrapper">
                {props.diary.words.map((word) => {
                  return <WordChip label={word.name} key={word.id} />
                })}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
