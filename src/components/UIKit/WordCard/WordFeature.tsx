import { Box, Typography } from '@mui/material'
import { Label } from 'components/UIKit/index'
import { Addible, Feature } from 'types/types'

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
                sx={{
                  padding: props.fullWidth ? '4px 0px' : '0px 8px',
                  display: props.fullWidth ? 'block' : 'inline-block',
                }}
              >
                <Typography sx={{ textIndent: props.fullWidth ? 8 : 0, lineHeight: 1.2 }} variant="body1">
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
