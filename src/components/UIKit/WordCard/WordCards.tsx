import { Word } from 'types/types'
import { WordCard } from 'components/UIKit/index'

type WordCardsProps = {
  words: Word[]
}

const WordCards = (props: WordCardsProps): JSX.Element => {
  return (
    <>
      {props.words.map((value) => (
        <WordCard word={value} key={value.wordId} />
      ))}
    </>
  )
}

export default WordCards
