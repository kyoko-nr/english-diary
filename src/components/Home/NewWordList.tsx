import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { NewWord } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'

type NewWordListProps = {
  newWords?: Word[]
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const [words, setWords] = useState<Word[]>()

  const createBlankWord = (): Word[] => {
    return [{ id: '', name: '', meanings: [], synonyms: [], examples: [] }]
  }

  // const words = test.length > 0 ? [...test] : createBlankWord()

  // const deleteInput = (id: string) => {
  //   if (contents) {
  //     const newContents = contents.filter((val) => val.id !== id)
  //     setContents(newContents)
  //   }
  // }

  useEffect(() => {
    console.log('new word list props.newWords', props.newWords)
    setWords(props.newWords)
  }, [])

  return (
    <>
      {words &&
        words.map((value) => {
          return (
            <NewWord
              id={value.id}
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
        <TextLargeButton label={'add new word'} color="primary" onClick={() => console.log('add word')} />
      </div>
    </>
  )
}

export default NewWordList
