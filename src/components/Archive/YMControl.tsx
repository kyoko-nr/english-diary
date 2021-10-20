import { createStyles, makeStyles } from '@material-ui/core'
import { FormatDate, ArrowIconButton } from '../UIKit/index'
import { addMonths, subMonths } from 'date-fns'

type YMControlProps = {
  date: Date
  onClick: (date: Date) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 4,
      display: 'flex',
      justifyContent: 'space-between',

      '& .MuiTypography-root': {
        lineHeight: 2.4,
      },
    },
  })
)

const YMControl = (props: YMControlProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ArrowIconButton type={'back'} onClick={props.onClick} nextYM={subMonths(props.date, 1)} />
      <FormatDate date={props.date} format={'ym'} variant={'h6'} align={'center'} />
      <ArrowIconButton type={'forward'} onClick={props.onClick} nextYM={addMonths(props.date, 1)} />
    </div>
  )
}

export default YMControl
