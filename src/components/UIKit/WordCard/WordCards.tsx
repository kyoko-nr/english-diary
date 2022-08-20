import { Word } from 'types/types'
import { WordCard } from 'components/UIKit/index'
import { Stack } from '@mui/material'

type WordCardsProps = {
  words: Word[]
  withDate?: boolean
}

const WordCards = (props: WordCardsProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={2}>
      {props.words && props.words.map((word) => <WordCard word={word} key={word.title} widhDate={props.withDate} />)}
    </Stack>
  )
}

export default WordCards
