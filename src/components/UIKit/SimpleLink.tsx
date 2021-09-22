import { createStyles, Link, makeStyles } from '@material-ui/core'

type SimpleLinkProps = {
  label: string
  component: 'button'
  onClick: () => void
  color: 'primary' | 'textPrimary'
  upperCase?: boolean
  variant: 'body1' | 'body2'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textTransform: 'uppercase',
    },
  })
)

const SimpleLink = (props: SimpleLinkProps): JSX.Element => {
  const classes = useStyles()
  const uppercase = props.upperCase

  return (
    <Link
      component={props.component}
      onClick={props.onClick}
      color={props.color}
      className={uppercase ? classes.root : ''}
      variant={props.variant}
    >
      {props.label}
    </Link>
  )
}

export default SimpleLink
