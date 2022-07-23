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
      <div className="spacer-16" />
      <div className="button-wrapper">
        <TextLargeButton label={'add new word'} color="primary" onClick={props.addWord} />
      </div>
    </>
  )
}

export default NewWordList
