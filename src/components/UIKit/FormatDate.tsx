import { format } from 'date-fns'
import Typography from '@mui/material/Typography'

type FormatDateProps = {
  date: Date
  format: 'ym' | 'date'
  variant: 'h6' | 'body1' | 'caption'
  align: 'left' | 'center'
}

const FormatDate = (props: FormatDateProps): JSX.Element => {
  let formated = ''
  switch (props.format) {
    case 'ym':
      formated = format(props.date, 'MMMM yyyy')
      break
    case 'date':
      formated = format(props.date, 'iii dd/MM/yyyy')
  }

  return (
    <Typography variant={props.variant} align={props.align}>
      {formated}
    </Typography>
  )
}

export default FormatDate
