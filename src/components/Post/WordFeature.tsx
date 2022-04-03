import { Box } from '@mui/material'

type WordFeatureProps = {
  value: string
  fullWidth: boolean
}

const WordFeature = (props: WordFeatureProps): JSX.Element => {
  return (
    <Box
      className="each"
      sx={{
        padding: '4px',
        display: props.fullWidth ? 'block' : 'inline-block',
      }}
    >
      {props.value}
    </Box>
  )
}

export default WordFeature
