import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/styles'

type LogoProps = {
  variant: 'h4' | 'h5'
  component: 'h1' | 'div'
  onClick?: () => void
  isLink?: boolean
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: 'Pacifico, cursive',
      color: '#4a4a4a',
    },
    link: {
      cursor: 'pointer',
    },
  })
)

const Logo = (props: LogoProps): JSX.Element => {
  const classes = useStyles()
  const isLink = props.isLink

  return (
    <Typography
      className={isLink ? `${classes.link} ${classes.root}` : classes.root}
      variant={props.variant}
      component={props.component}
      onClick={props.onClick}
    >
      English Diary
    </Typography>
  )
}

export default Logo
