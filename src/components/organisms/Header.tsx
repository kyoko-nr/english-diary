import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <>
      <Toolbar>
        <Typography component="h1" align="center">
          {props.title}
        </Typography>
      </Toolbar>
    </>
  )
}

export default Header
