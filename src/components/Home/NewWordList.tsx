/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { getWordId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'

type NewWordListProps = {
  diaryId: string
  control: any
  fields: any
  append: any
  remove: any
  update: any
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const addWord = (): void => {
    const uid = getUserId(selector)
    const id = getWordId(uid, props.diaryId)
    const newWord = { id: id, title: '', meanings: [], synonyms: [], examples: [] }
    props.append(newWord)
  }

  const deleteWord = (index: string): void => {
    props.remove(index)
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
            deleteWord={deleteWord}
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
