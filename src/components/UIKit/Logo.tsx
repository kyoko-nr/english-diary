import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/styles'

type LogoProps = {
  variant: 'h4' | 'h5'
  component: 'h1' | 'div'
  onClick?: () => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: 'Pacifico, cursive',
      color: '#4a4a4a',
    },
  })
)

const Logo = (props: LogoProps): JSX.Element => {
  const classes = useStyles()
  const isLink = false

  return (
    <Typography className={classes.root} variant={props.variant} component={props.component} onClick={props.onClick}>
      English Diary
    </Typography>
  )
}

export default Logo
