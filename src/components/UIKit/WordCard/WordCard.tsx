import { Card, CardContent, Box } from '@mui/material'
import { Label, WordFeature, Pos } from 'components/UIKit/index'
import { Word } from 'types/types'

type WordCardProps = {
  word: Word
}

const WordCard = (props: WordCardProps): JSX.Element => {
  return (
    <Card variant="outlined" sx={{ marginBottom: '16px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Label label={props.word.title} variant="h6" align="left" color="primary" />
          <Pos pos={props.word.pos} />
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
