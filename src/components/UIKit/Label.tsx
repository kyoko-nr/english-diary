import { createStyles, makeStyles, Typography } from '@material-ui/core'

type LabelProps = {
  label: string
  variant: 'h4' | 'body1' | 'body2' | 'caption'
  align: 'center' | 'right' | 'left'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
    },
  })
)

const Label = (props: LabelProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Typography className={classes.root} variant={props.variant} align={props.align}>
      {props.label}
    </Typography>
  )
}

export default Label
