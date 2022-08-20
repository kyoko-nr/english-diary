import { Stack, Box } from '@mui/material'
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Control } from 'react-hook-form'
import { WordForm, Word } from 'types/types'

type NewWordListProps = {
  diaryId: string
  control: Control<WordForm>
  fields: Word[]
  addWord: () => void
  deleteWord: (wordIndex: number) => void
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  return (
    <>
      <Stack spacing={2}>
        {props.fields.map((field, index) => (
          <NewWord
            diaryId={props.diaryId}
            word={field}
            key={field.title}
            name={`words.${index}`}
            control={props.control}
            deleteWord={props.deleteWord}
            wordIndex={index}
          />
        ))}
      </Stack>
      <div className="spacer-16" />
      <Box display="flex" justifyContent="center">
        <TextLargeButton label={'add new word'} color="primary" onClick={props.addWord} />
      </Box>
    </>
  )
}

export default NewWordList
