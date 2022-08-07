import { NewWord } from 'components/Home'
import { ColumnGridContainer, RowGridContainer, TextLargeButton } from 'components/UIKit/index'
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
      <ColumnGridContainer spacing={2} justifyContent="center">
        {props.fields.map((field, index) => {
          return (
            <NewWord
              diaryId={props.diaryId}
              word={field}
              key={field.title}
              name={`words.${index}`}
              control={props.control}
              deleteWord={props.deleteWord}
              wordIndex={index}
            />
          )
        })}
      </ColumnGridContainer>
      <div className="spacer-16" />
      <RowGridContainer spacing={0} justifyContent="center">
        <TextLargeButton label={'add new word'} color="primary" onClick={props.addWord} />
      </RowGridContainer>
    </>
  )
}

export default NewWordList
