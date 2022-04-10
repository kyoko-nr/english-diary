import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getWordId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'

import { Word } from 'reducks/users/types'

type NewWordListProps = {
  newWords: Word[]
  diaryId: string
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const [words, setWords] = useState<Word[]>()

  const addWord = (): void => {
    const uid = getUserId(selector)
    const id = getWordId(uid, props.diaryId)
    const newWord = { id: id, name: '', meanings: [], synonyms: [], examples: [] }
    let newWords: Word[] = []
    if (words) {
      newWords = [...words]
    }
    newWords.push(newWord)
    setWords(newWords)
  }

  // const words = test.length > 0 ? [...test] : createBlankWord()

  // const deleteInput = (id: string) => {
  //   if (contents) {
  //     const newContents = contents.filter((val) => val.id !== id)
  //     setContents(newContents)
  //   }
  // }

  useEffect(() => {
    setWords(props.newWords)
  }, [])

  return (
    <>
      {words &&
        words.map((value) => {
          return (
            <NewWord
              id={value.id}
              diaryId={props.diaryId}
              name={value.name}
              meanings={value.meanings}
              synonyms={value.synonyms}
              examples={value.examples}
              key={value.id}
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
