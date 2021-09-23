import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type TextLargeButtonProps = {
  label: string
  onClick: () => void
  color: 'primary'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 264,
      height: 40,
      borderRadius: 20,
      fontSize: 16,
    },
  })
)

const TextLargeButton = (props: TextLargeButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick} variant={'text'} color={props.color}>
      {props.label}
    </Button>
  )
}

export default TextLargeButton
