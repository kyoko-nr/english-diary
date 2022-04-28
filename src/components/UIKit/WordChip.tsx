import Chip from '@mui/material/Chip'

type WordChipProps = {
  label: string
}
const WordChip = (props: WordChipProps): JSX.Element => {
  return <Chip className="wordchip" label={props.label} variant="outlined" size="small" />
}

export default WordChip
