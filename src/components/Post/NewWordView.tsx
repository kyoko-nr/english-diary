import { Card, CardContent, Box } from '@mui/material'
import { WordFeature, PosView } from 'components/Post/index'
import { Label } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'

type NewWordViewProps = {
  word: Word
}

const NewWordView = (props: NewWordViewProps): JSX.Element => {
  return (
    <Card variant="outlined" sx={{ color: '#4a4a4a', marginBottom: '16px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Label label={props.word.title} variant="h6" align="left" color="primary" />
          <PosView pos={props.word.pos} />
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

export default NewWordView
