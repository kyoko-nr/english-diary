import { createStyles, makeStyles, Typography } from '@material-ui/core'

type LabelProps = {
  label: string
  variant: 'h4' | 'h5' | 'body1' | 'body2' | 'caption'
  align: 'center' | 'right' | 'left'
  color?: 'error'
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
    <Typography
      className={classes.root}
      variant={props.variant}
      align={props.align}
      color={props.color ? props.color : 'textPrimary'}
    >
      {props.label}
    </Typography>
  )
}

export default Label
