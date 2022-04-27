import { Box } from '@mui/material'
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
          <Label label={props.featureName} variant="body2" align="left" uppercase={true} bold={true} />
          {props.feature.map((fe) => {
            return (
              <Box
                key={fe.id}
                className="each"
                sx={{ padding: '4px', display: props.fullWidth ? 'block' : 'inline-block' }}
              >
                {fe.value}
              </Box>
            )
          })}
        </div>
      )}
    </>
  )
}

export default WordFeature
