import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { Diary } from 'Types/TypeList'

type ArchiveProps = {
  diary: Diary
}

const Archive = (props: ArchiveProps): JSX.Element => {
  return (
    <CardActionArea component="a" href={`/view/${props.diary.id}`}>
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
