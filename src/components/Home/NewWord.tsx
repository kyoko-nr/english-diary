import { Card, CardContent, CardActions, Grid } from '@mui/material'
import { AddibleContent, TextMidButton, PosSelect, WordTitleInput, RowGridContainer } from 'components/UIKit/index'
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
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent sx={{ padding: '8px 16px', boxShadow: 'none' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <WordTitleInput defaultValue={props.word.title} control={props.control} wordIndex={props.wordIndex} />
          </Grid>
          <Grid item xs={4}>
            <PosSelect control={props.control} wordIndex={props.wordIndex} defautlValue={props.word.pos} />
          </Grid>
        </Grid>
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
      <CardActions>
        <RowGridContainer spacing={0} justifyContent="center">
          <TextMidButton label="delete this word" color="error" onClick={() => props.deleteWord(props.wordIndex)} />
        </RowGridContainer>
      </CardActions>
    </Card>
  )
}

export default NewWord
