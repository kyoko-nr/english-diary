import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type PrimaryMidButtonProps = {
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
      backgroundColor: '#4283B8',
      color: '#fff',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',

      '&:hover': {
        backgroundColor: '#2c6fa5',
        boxShadow:
          '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      },
    },
  })
)

const PrimaryMidButton = (props: PrimaryMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.label}
    </Button>
  )
}

export default PrimaryMidButton
