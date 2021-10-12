import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

type ArrowIconButtonProps = {
  type: 'forward' | 'back'
  onClick: (date: Date) => void
  nextYM: Date
}
const ArrowIconButton = (props: ArrowIconButtonProps): JSX.Element => {
  return (
    <IconButton onClick={() => props.onClick(props.nextYM)} color={'primary'}>
      {props.type === 'forward' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
    </IconButton>
  )
}

export default ArrowIconButton
