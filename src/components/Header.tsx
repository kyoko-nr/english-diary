import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link color={'inherit'} underline={'none'} component={'a'} href={'/top'}>
          <Typography variant="h4" align="center">
            {props.title}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
