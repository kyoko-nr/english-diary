import Typography from '@mui/material/Typography'

type LogoProps = {
  variant: 'h4' | 'h5'
  component: 'h1' | 'div'
  onClick?: () => void
  isLink?: boolean
}

const Logo = (props: LogoProps): JSX.Element => {
  return (
    <Typography
      className="main-logo"
      variant={props.variant}
      component={props.component}
      onClick={props.onClick}
      sx={{ cursor: props.isLink ? 'pointer' : 'default' }}
    >
      English Diary
    </Typography>
  )
}

export default Logo
