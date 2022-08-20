import { Link } from '@mui/material'

type SimpleLinkProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'textPrimary'
  upperCase?: boolean
  variant: 'body1' | 'body2' | 'h6'
  disabled?: boolean
}

const SimpleLink = (props: SimpleLinkProps): JSX.Element => {
  return (
    <Link
      component="button"
      onClick={props.onClick}
      color={props.color}
      variant={props.variant}
      sx={{
        textTransform: props.upperCase ? 'uppercase' : 'none',
        textUnderlineOffset: '2px',
        textDecoration: props.disabled ? 'none' : '',
        opacity: props.disabled ? 0.5 : 1,
        cursor: props.disabled ? 'initial' : 'pointer',
        minWidth: '20px',
      }}
      disabled={props.disabled}
    >
      {props.label}
    </Link>
  )
}

export default SimpleLink
