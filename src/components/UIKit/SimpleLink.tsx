import { Link } from '@mui/material'

type SimpleLinkProps = {
  label: string
  component: 'button'
  onClick: () => void
  color: 'primary' | 'textPrimary'
  upperCase?: boolean
  variant: 'body1' | 'body2'
}

const SimpleLink = (props: SimpleLinkProps): JSX.Element => {
  return (
    <Link
      className="grey-text"
      component={props.component}
      onClick={props.onClick}
      color={props.color}
      variant={props.variant}
      sx={{ textTransform: props.upperCase ? 'uppercase' : 'none' }}
    >
      {props.label}
    </Link>
  )
}

export default SimpleLink
