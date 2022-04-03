import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { WordCard } from 'components/Home'
import { TextLargeButton } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'

type NewWordListProps = {
  newWords: Word[]
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()

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
    const all: Word[] = getWords(selector)
    // const test = [
    //   {
    //     id: '1',
    //     name: 'test',
    //     meanings: [{ id: '1', value: 'meaning' }],
    //     synonyms: [{ id: '1', value: 'synonyms' }],
    //     examples: [{ id: '1', value: 'examples' }],
    //   },
    // ]
    setWords(all)
  }, [])

  return (
    <>
      {/* {words &&
        words.map((value) => {
          return (
          // <WordCard
          //   id={value.id}
          //   name={value.name}
          //   meanings={value.meanings}
          //   synonyms={value.synonyms}
          //   examples={value.examples}
          // />)
        })
      } */}
      <div className="spacer-16" />
      <div className="button-wrapper">
        <TextLargeButton label={'add new word'} color="primary" onClick={() => console.log('add word')} />
      </div>
    </>
  )
}

export default NewWordList
