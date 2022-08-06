import { Word } from 'types/types'
import { ColumnGridContainer, WordCard } from 'components/UIKit/index'

type WordCardsProps = {
  words: Word[]
  withDate?: boolean
}

const WordCards = (props: WordCardsProps): JSX.Element => {
  return (
    <ColumnGridContainer spacing={2} justifyContent="flex-start">
      {props.words &&
        props.words.map((word) => {
          return <WordCard word={word} key={word.title} widhDate={props.withDate} />
        })}
    </ColumnGridContainer>
  )
}

export default WordCards
