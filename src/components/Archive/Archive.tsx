import { useDispatch } from 'react-redux'
import { Card, CardActionArea, CardContent } from '@mui/material'
import { push } from 'connected-react-router'
import { Diary } from 'types/types'
import { FormatDate, WordChip, Label, RowGridContainer } from '../UIKit/index'

type ArchiveProps = {
  diary: Diary
}

const Archive = (props: ArchiveProps): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <CardActionArea component="a" onClick={() => dispatch(push(`/post/${props.diary.id}`))}>
      <Card sx={{ boxShadow: 'none' }}>
        <CardContent sx={{ padding: 2, borderBottom: '1px solid #4a4a4a' }}>
          <FormatDate date={props.diary.date} format={'date'} variant={'caption'} align={'left'} />
          <Label label={props.diary.title} variant="body1" align="left" bold={true} overflowElipses={true} />
          <Label label={props.diary.content} variant="body2" align="left" overflowElipses={true} />
          {props.diary.words && props.diary.words.length > 0 && (
            <>
              <div className="spacer-8" />
              <RowGridContainer spacing={1} justifyContent="flex-start">
                {props.diary.words.map((word) => {
                  return <WordChip label={word.title} key={word.title} />
                })}
              </RowGridContainer>
            </>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default Archive
