import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type TextMidButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'default'
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

const TextMidButton = (props: TextMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick} variant={'text'} color={props.color}>
      {props.label}
    </Button>
  )
}

export default TextMidButton
