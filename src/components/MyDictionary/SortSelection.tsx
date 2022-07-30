import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { SortOptions } from 'constants/Parts'
import { SortOption } from 'types/types'

type SortSelectionProps = {
  sortOption: SortOption
  onChange: (event: SelectChangeEvent) => void
}

const SortSelection = (props: SortSelectionProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '200px' }}>
      <InputLabel id="sort-label">Sort</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-selection"
        value={props.sortOption.key}
        label="Sort"
        onChange={props.onChange}
      >
        {SortOptions.map((p) => (
          <MenuItem value={p.key} key={p.key}>
            {p.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SortSelection
