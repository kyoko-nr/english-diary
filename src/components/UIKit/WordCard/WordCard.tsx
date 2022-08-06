import { Card, CardContent } from '@mui/material'
import {
  Label,
  WordFeature,
  Pos,
  FormatDate,
  RowGridContainer,
  ColumnGridContainer,
  WordFeatureSynonym,
} from 'components/UIKit/index'
import { Word } from 'types/types'

type WordCardProps = {
  word: Word
  widhDate?: boolean
}

const WordCard = (props: WordCardProps): JSX.Element => {
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <ColumnGridContainer spacing={1} justifyContent="flex-start">
          <RowGridContainer spacing={1} justifyContent="flex-start">
            <Label label={props.word.title} variant="h6" align="left" color="primary" />
            <Pos pos={props.word.pos} />
            {props.widhDate && <FormatDate date={props.word.createdAt} format="date" variant="body1" align="left" />}
          </RowGridContainer>
          {props.word.meanings.length > 0 && <WordFeature feature={props.word.meanings} featureName="meanings" />}
          {props.word.synonyms.length > 0 && (
            <WordFeatureSynonym feature={props.word.synonyms} featureName="synonyms" />
          )}
          {props.word.examples.length > 0 && <WordFeature feature={props.word.examples} featureName="examples" />}
        </ColumnGridContainer>
      </CardContent>
    </Card>
  )
}

export default WordCard
