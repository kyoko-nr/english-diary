import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type OutlineMidButtonProps = {
  label: string
  onClick: () => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 112,
      height: 40,
      borderRadius: 20,
      fontSize: 16,
    },
  })
)

const OutlineMidButton = (props: OutlineMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick} variant={'outlined'}>
      {props.label}
    </Button>
  )
}

export default OutlineMidButton
