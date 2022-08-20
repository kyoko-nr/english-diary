import { Typography, Box } from '@mui/material'
import { Label, RowGridContainer } from 'components/UIKit/index'
import { Addible, Feature } from 'types/types'

type WordFeatureProps = {
  feature: Addible[]
  featureName: Feature
}

const WordFeatureSynonym = (props: WordFeatureProps): JSX.Element => {
  return (
    <div>
      <Label label={props.featureName} variant="body1" align="left" capitalize={true} bold={true} />
      <RowGridContainer spacing={1} justifyContent="flex-start">
        {props.feature.map((fe, index) => (
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ marginRight: '8px', textIndent: '8px' }}>
              {fe.value}
            </Typography>
            {index !== props.feature.length - 1 && <span>/</span>}
          </Box>
        ))}
      </RowGridContainer>
    </div>
  )
}

export default WordFeatureSynonym
