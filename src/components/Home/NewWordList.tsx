/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { getWordId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'
import { FieldArrayMethodProps } from 'react-hook-form'

type NewWordListProps = {
  diaryId: string
  control: any
  fields: any
  append: (value: Partial<Word> | Partial<Word>[], options?: FieldArrayMethodProps | undefined) => void
  remove: (index?: number | number[] | undefined) => void
  update: (index: number, value: Partial<Word>) => void
  deleteWord: (index: string, wordId: string) => void
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const addWord = (): void => {
    const uid = getUserId(selector)
    const id = getWordId(uid, props.diaryId)
    const newWord: Word = { wordId: id, title: '', meanings: [], synonyms: [], examples: [], pos: '' }
    props.append(newWord)
  }

  return (
    <>
      {props.fields.map((value: Word, index: string) => {
        return (
          <NewWord
            diaryId={props.diaryId}
            word={value}
            key={value.wordId}
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
