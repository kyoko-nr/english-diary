import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Toolbar, Typography, Link, Container } from '@material-ui/core'
import { signOutFrom } from 'reducks/users/operations'
import { SimpleLink } from './UIKit/index'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <AppBar position="sticky" color={'secondary'}>
      <Container maxWidth="lg">
        <Toolbar>
          <Link color={'inherit'} underline={'none'} component={'a'} onClick={() => dispatch(push('/'))}>
            <Typography variant="h4" align="center">
              {props.title}
            </Typography>
          </Link>
          <SimpleLink
            label={'sign out'}
            component={'button'}
            onClick={() => dispatch(signOutFrom())}
            color={'primary'}
            upperCase={true}
            variant={'body1'}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
