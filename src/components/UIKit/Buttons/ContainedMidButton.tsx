import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type ContainedMidButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'secondary'
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

const ContainedMidButton = (props: ContainedMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick} variant={'contained'} color={props.color}>
      {props.label}
    </Button>
  )
}

export default ContainedMidButton
