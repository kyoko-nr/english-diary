import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { Diary } from 'Types/TypeList'

const Archive = (props: Diary): JSX.Element => {
  return (
    <CardActionArea component="a" href={`/view/${props.id}`}>
      <Card>
        <CardContent>
          <div>{props.date}</div>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <div>{props.content}</div>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
