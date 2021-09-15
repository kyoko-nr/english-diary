import { AppBar, Toolbar, Typography, Link, Container } from '@material-ui/core'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link color={'inherit'} underline={'none'} component={'a'} href={'/top'}>
            <Typography variant="h4" align="center">
              {props.title}
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
