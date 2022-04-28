import { Box, Typography } from '@mui/material'
import { Label } from 'components/UIKit/index'
import { Addible, Feature } from 'reducks/users/types'

type WordFeatureProps = {
  feature: Addible[]
  featureName: Feature
  fullWidth: boolean
}

const WordFeature = (props: WordFeatureProps): JSX.Element => {
  return (
    <>
      {props.feature && props.feature.length > 0 && (
        <div className={props.featureName}>
          <Label label={props.featureName} variant="body1" align="left" capitalize={true} bold={true} />
          {props.feature.map((fe) => {
            return (
              <Box
                key={fe.id}
                className="each"
                sx={{ padding: '2px 8px', display: props.fullWidth ? 'block' : 'inline-block' }}
              >
                <Typography sx={{ textIndent: 1 }} variant="body1">
                  {fe.value}
                </Typography>
              </Box>
            )
          })}
        </div>
      )}
    </>
  )
}

export default WordFeature
