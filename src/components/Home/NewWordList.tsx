import { Typography } from '@material-ui/core'
import { WordCard } from 'components/Home'
import { Word } from 'reducks/users/types'

type NewWordListProps = {
  newWords: Word[]
}

const NewWordList = (props: NewWordListProps): JSX.Element => {
  const createBlankWord = (): Word[] => {
    return [{ id: '', name: '', meanings: [], synonyms: [], examples: [] }]
  }
  const test = [
    {
      id: '1',
      name: 'test',
      meanings: [{ idx: 1, value: 'meaning' }],
      synonyms: [{ idx: 1, value: 'synonyms' }],
      examples: [{ idx: 1, value: 'examples' }],
    },
  ]
  const words = test.length > 0 ? [...test] : createBlankWord()

  return (
    <>
      {/* {words.map((value: Word) => {
          return <NewWord newWord={value} key={value.id}/>
        })
      } */}
      <WordCard></WordCard>
    </>
  )
}

export default NewWordList
