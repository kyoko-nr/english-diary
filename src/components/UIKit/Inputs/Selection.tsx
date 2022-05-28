import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { Option } from 'types/types'

type SelectionProps = {
  value: string
  name: string
  onChange: (event: SelectChangeEvent) => void
  options: Option[]
}

const Selection = (props: SelectionProps): JSX.Element => {
  const labelid = `${props.name}-label`
  const id = `${props.name}-selection`
  return (
    <FormControl sx={{ width: '200px' }}>
      <InputLabel id={labelid}>{props.name}</InputLabel>
      <Select labelId={labelid} id={id} value={props.value} label={props.name} onChange={props.onChange}>
        {props.options.map((p) => (
          <MenuItem value={p.key} key={p.key}>
            {p.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Selection
