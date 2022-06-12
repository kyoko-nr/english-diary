import { TextField, FormControl, MenuItem } from '@mui/material'
import { Controller } from 'react-hook-form'
import { PosOptions } from 'constants/Parts'

type PosSelectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  name: string
}

const PosSelect = (props: PosSelectProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '160px', marginLeft: '16px' }}>
      <Controller
        name={props.name}
        control={props.control}
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
