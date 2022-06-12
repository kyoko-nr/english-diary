import { useEffect, useState } from 'react'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { SortOptions } from 'constants/Parts'

type SortSelectionProps = {
  value: string
  name: string
  onChange: (event: SelectChangeEvent) => void
}

const SortSelection = (props: SortSelectionProps): JSX.Element => {
  const [test, setTest] = useState('')

  useEffect(() => {
    setTest(props.value)
  }, [props.value])

  return (
    <FormControl sx={{ width: '200px' }}>
      <InputLabel id="sort-label">Sort</InputLabel>
      <Select labelId="sort-label" id="sort-selection" value={test} label="Sort" onChange={props.onChange}>
        {SortOptions.map((p) => (
          <MenuItem value={p.key} key={p.key}>
            {p.sort}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SortSelection
