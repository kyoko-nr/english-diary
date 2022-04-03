import { Card, CardContent } from '@mui/material'
import { WordFeature } from 'components/Post/index'
import { Label } from 'components/UIKit/index'
import { Word } from 'reducks/users/types'

type NewWordViewProps = {
  word: Word
}

const NewWordView = (props: NewWordViewProps): JSX.Element => {
  return (
    <Card sx={{ color: '#4a4a4a', marginBottom: '16px' }}>
      <CardContent>
        <Label label={props.word.name} variant="h6" align="left" color={'primary'} />
        <div className="spacer-8" />
        {props.word.meanings && props.word.meanings.length > 0 && (
          <div className="meanings">
            <Label label="meanings" variant="body1" align="left" uppercase={true} bold={true} />
            {props.word.meanings.map((m) => {
              return <WordFeature value={m.value} fullWidth={true} key={m.id} />
            })}
          </div>
        )}
        <div className="spacer-8" />
        {props.word.synonyms && props.word.synonyms.length > 0 && (
          <div className="synonyms">
            <Label label="synonyms" variant="body1" align="left" uppercase={true} bold={true} />
            {props.word.synonyms.map((s) => {
              return <WordFeature value={s.value} fullWidth={false} key={s.id} />
            })}
          </div>
        )}
        <div className="spacer-8" />
        {props.word.examples && props.word.examples.length > 0 && (
          <div className="examples">
            <Label label="examples" variant="body1" align="left" uppercase={true} bold={true} />
            {props.word.examples.map((e) => {
              return <WordFeature value={e.value} fullWidth={true} key={e.id} />
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default NewWordView
