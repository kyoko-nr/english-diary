import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { Diary } from 'types/TypeList'

type ArchiveProps = {
  diary: Diary
}

const Archive = (props: ArchiveProps): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <CardActionArea component="a" onClick={() => dispatch(push(`/posts/${props.diary.id}`))}>
      <Card className={'archive'}>
        <CardContent>
          <div className={'date'}>{props.diary.date}</div>
          <Typography className={'title'} component="h2">
            {props.diary.title}
          </Typography>
          <div className={'diary-content'}>{props.diary.content}</div>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
