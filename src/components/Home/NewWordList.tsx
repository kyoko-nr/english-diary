/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Word } from 'types/types'
import { FieldArrayMethodProps } from 'react-hook-form'

type NewWordListProps = {
  diaryId: string
  control: any
  fields: any
  append: (value: Partial<Word> | Partial<Word>[], options?: FieldArrayMethodProps | undefined) => void
  remove: (index?: number | number[] | undefined) => void
  update: (index: number, value: Partial<Word>) => void
  deleteWord: (index: string) => void
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const addWord = (): void => {
    const newWord: Word = { title: '', meanings: [], synonyms: [], examples: [], pos: '' }
    props.append(newWord)
  }

  return (
    <>
      {props.fields.map((value: Word, index: string) => {
        return (
          <NewWord
            diaryId={props.diaryId}
            word={value}
            key={value.title}
            name={`words.${index}`}
            control={props.control}
            deleteWord={props.deleteWord}
            index={index}
            update={props.update}
          />
        )
      })}
      <div className="spacer-16" />
      <div className="button-wrapper">
        <TextLargeButton label={'add new word'} color="primary" onClick={addWord} />
      </div>
    </>
  )
}

export default NewWordList
