import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" align="center">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
