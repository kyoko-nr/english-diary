import { Card, CardContent, Box } from '@mui/material'
import { Label, WordFeature, Pos, FormatDate } from 'components/UIKit/index'
import { Word } from 'types/types'

type WordCardProps = {
  word: Word
  widhDate?: boolean
}

const WordCard = (props: WordCardProps): JSX.Element => {
  return (
    <Card variant="outlined" sx={{ marginBottom: '16px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Label label={props.word.title} variant="h6" align="left" color="primary" />
          <Pos pos={props.word.pos} />
          {props.widhDate && <FormatDate date={props.word.createdAt} format="date" variant="body1" align="left" />}
        </Box>
        <div className="spacer-8" />
        <WordFeature feature={props.word.meanings} featureName="meanings" fullWidth={true} />
        <div className="spacer-8" />
        <WordFeature feature={props.word.synonyms} featureName="synonyms" fullWidth={false} />
        <div className="spacer-8" />
        <WordFeature feature={props.word.examples} featureName="examples" fullWidth={true} />
      </CardContent>
    </Card>
  )
}

export default WordCard
