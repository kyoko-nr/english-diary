// import Button from '@material-ui/core/Button'
import Button from '@mui/material/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type OutlineMidButtonProps = {
  label: string
  onClick: () => void
  color: 'inherit' | 'error'
  className?: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '&.MuiButton-root': {
        width: 112,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      },
    },
  })
)

const OutlineMidButton = (props: OutlineMidButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Button
      className={(props.className && props.className) + ' ' + classes.root}
      onClick={props.onClick}
      variant={'outlined'}
      color={props.color}
    >
      {props.label}
    </Button>
  )
}

export default OutlineMidButton
