import { Typography, Stack } from '@mui/material'
import { Label } from 'components/UIKit/index'
import { Addible, Feature } from 'types/types'

type WordFeatureProps = {
  feature: Addible[]
  featureName: Feature
}

const WordFeature = (props: WordFeatureProps): JSX.Element => {
  return (
    <div>
      <Label label={props.featureName} variant="body1" align="left" capitalize={true} bold={true} />
      <Stack spacing={1}>
        {props.feature.map((fe) => (
          <Typography variant="body1" sx={{ textIndent: '8px', lineHeight: '1.2' }}>
            {fe.value}
          </Typography>
        ))}
      </Stack>
    </div>
  )
}

export default WordFeature
