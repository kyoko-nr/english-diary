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
      backgroundColor: '#fff',
      color: '#4a4a4a',
      border: '1px solid #4a4a4a',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',

      '&:hover': {
        boxShadow:
          '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      },
    },
  })
)

const OutlineMidButton = (props: OutlineMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.label}
    </Button>
  )
}

export default OutlineMidButton
