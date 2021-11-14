import Button from '@mui/material/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type OutlineLargeButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'secondary' | 'error'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '&.MuiButton-root': {
        width: 240,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      },
    },
  })
)

const OutlineLargeButton = (props: OutlineLargeButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick} variant={'outlined'} color={props.color}>
      {props.label}
    </Button>
  )
}

export default OutlineLargeButton
