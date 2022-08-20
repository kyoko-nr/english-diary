import { TextField, Box, Grid } from '@mui/material'
import { RemoveIconButton } from 'components/UIKit/index'
import { Controller, Control } from 'react-hook-form'
import { Feature, WordForm } from 'types/types'

type InputProps = {
  feature: Feature
  control: Control<WordForm>
  fullWidth: boolean
  deleteFeature: (featureIndex: number) => void
  wordIndex: number
  featureIndex: number
  defaultValue: string | undefined
}

const TextInputDeletable = (props: InputProps): JSX.Element => {
  return (
    <Grid item xs={props.fullWidth ? 12 : 3}>
      <Box display={'flex'}>
        <Controller
          name={`words.${props.wordIndex}.${props.feature}.${props.featureIndex}.value`}
          control={props.control}
          defaultValue={props.defaultValue}
          render={({ field }) => (
            <TextField {...field} variant="standard" required={false} fullWidth={props.fullWidth} />
          )}
        />
        <RemoveIconButton featureIndex={props.featureIndex} onClick={props.deleteFeature} />
      </Box>
    </Grid>
  )
}

export default TextInputDeletable
