import { TextField, FormControl, MenuItem } from '@mui/material'
import { Controller, Control } from 'react-hook-form'
import { PosOptions } from 'constants/Parts'
import { WordForm } from 'types/types'

type PosSelectProps = {
  control: Control<WordForm>
  wordIndex: number
  defautlValue?: string
}

const PosSelect = (props: PosSelectProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <Controller
        name={`words.${props.wordIndex}.pos`}
        control={props.control}
        defaultValue={props.defautlValue || ''}
        render={({ field }) => (
          <TextField {...field} label="Parts of speech" required={false} variant="standard" select>
            {PosOptions.map((p) => (
              <MenuItem value={p.key} key={p.key}>
                {p.value}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  )
}

export default PosSelect
