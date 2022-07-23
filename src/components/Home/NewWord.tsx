import { Card, CardContent, CardActions, Box } from '@mui/material'
import { AddibleContent, TextMidButton, PosSelect, WordTitleInput } from 'components/UIKit/index'
import { Control } from 'react-hook-form'
import { Word, WordForm } from 'types/types'

type NewWordProps = {
  word: Word
  diaryId: string
  name: string
  control: Control<WordForm>
  deleteWord: (wordIndex: number) => void
  wordIndex: number
}

const NewWord = (props: NewWordProps): JSX.Element => {
  return (
    <Card sx={{ marginBottom: '16px' }} variant="outlined">
      <CardContent sx={{ padding: '8px 16px', boxShadow: 'none' }}>
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <WordTitleInput defaultValue={props.word.title} control={props.control} wordIndex={props.wordIndex} />
          <PosSelect control={props.control} wordIndex={props.wordIndex} defautlValue={props.word.pos} />
        </Box>
        <AddibleContent
          diaryId={props.diaryId}
          feature="meanings"
          fullWidth={true}
          control={props.control}
          wordIndex={props.wordIndex}
        />
        <div className="spacer-8" />
        <AddibleContent
          diaryId={props.diaryId}
          feature="synonyms"
          fullWidth={false}
          control={props.control}
          wordIndex={props.wordIndex}
        />
        <div className="spacer-8" />
        <AddibleContent
          diaryId={props.diaryId}
          feature="examples"
          fullWidth={true}
          control={props.control}
          wordIndex={props.wordIndex}
        />
      </CardContent>
      <CardActions className="button-wrapper">
        <TextMidButton label="delete this word" color="error" onClick={() => props.deleteWord(props.wordIndex)} />
      </CardActions>
    </Card>
  )
}

export default NewWord
