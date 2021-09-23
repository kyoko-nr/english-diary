import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Toolbar, Container } from '@material-ui/core'
import { signOutFrom } from 'reducks/users/operations'
import { TextMidButton, Logo } from './UIKit/index'

const Header = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <AppBar position="sticky" color={'secondary'}>
      <Container maxWidth="lg">
        <Toolbar>
          <Logo variant={'h5'} component={'div'} isLink={true} />
          <TextMidButton label={'sign out'} onClick={() => dispatch(signOutFrom())} color={'default'} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
