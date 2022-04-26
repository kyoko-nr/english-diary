import { Select, SelectChangeEvent, MenuItem } from '@mui/material'
import { Parts } from 'constants/Parts'

const EnglishPartsSelect = (): JSX.Element => {
  return (
    <Select
      value={'age'}
      displayEmpty
      defaultValue=""
      inputProps={{ 'aria-label': 'Without label' }}
      onChange={() => console.log('changed')}
    >
      {Parts.map((p) => {
        return (
          <MenuItem value={p.key} key={p.key}>
            {p.value}
          </MenuItem>
        )
      })}
    </Select>
  )
}

export default EnglishPartsSelect
