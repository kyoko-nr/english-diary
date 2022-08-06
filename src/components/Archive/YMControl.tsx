import { Box } from '@mui/material'
import { FormatDate, ArrowIconButton } from '../UIKit/index'
import { addMonths, subMonths } from 'date-fns'

type YMControlProps = {
  date: Date
  onClick: (date: Date) => void
}

const YMControl = (props: YMControlProps): JSX.Element => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <ArrowIconButton type={'back'} onClick={props.onClick} nextYM={subMonths(props.date, 1)} />
      <FormatDate date={props.date} format={'ym'} variant={'h6'} align={'center'} />
      <ArrowIconButton type={'forward'} onClick={props.onClick} nextYM={addMonths(props.date, 1)} />
    </Box>
  )
}

export default YMControl
