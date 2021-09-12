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
      <Card>
        <CardContent>
          <div>{props.diary.date}</div>
          <Typography variant="h5" component="h2">
            {props.diary.title}
          </Typography>
          <div>{props.diary.content}</div>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
