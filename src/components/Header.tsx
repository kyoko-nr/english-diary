import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Toolbar } from '@material-ui/core'
import { signOutFrom } from 'reducks/users/operations'
import { TextMidButton, Logo } from './UIKit/index'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      backgroundColor: '#FFDB46',
      color: '#4a4a4a',
    },
    toolBar: {
      maxWidth: 1280,
    },
    signOut: {
      margin: '0 0 0 auto',
    },
  })
)

const Header = (): JSX.Element => {
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <Logo variant={'h5'} component={'div'} onClick={() => dispatch(push('/'))} />
          <span className={classes.signOut}>
            <TextMidButton label={'sign out'} onClick={() => dispatch(signOutFrom())} color={'default'} />
          </span>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
