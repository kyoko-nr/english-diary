import { Typography } from '@mui/material'
import { ColumnGridContainer, Label } from 'components/UIKit/index'
import { Addible, Feature } from 'types/types'

type WordFeatureProps = {
  feature: Addible[]
  featureName: Feature
}

const WordFeature = (props: WordFeatureProps): JSX.Element => {
  return (
    <div>
      <Label label={props.featureName} variant="body1" align="left" capitalize={true} bold={true} />
      <ColumnGridContainer spacing={1} justifyContent="flex-start">
        {props.feature.map((fe) => {
          return (
            <Typography variant="body1" sx={{ textIndent: '8px', lineHeight: '1.2' }}>
              {fe.value}
            </Typography>
          )
        })}
      </ColumnGridContainer>
    </div>
  )
}

export default WordFeature
