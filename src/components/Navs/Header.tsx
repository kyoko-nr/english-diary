import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Divider, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { signOutFrom } from 'reducks/users/operations'
import { TextMidButton, Logo } from 'components/UIKit/index'
import { makeStyles, createStyles } from '@material-ui/styles'
import { useState } from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      backgroundColor: '#FFDB46',
      color: '#4a4a4a',
      display: 'flex',
      alignItems: 'center',
    },
    toolBar: {
      maxWidth: 1280,
      width: '100%',
      boxSizing: 'border-box',
    },
    alignRight: {
      margin: '0 0 0 auto',
    },
    userIcon: {
      padding: 8,
    },
  })
)

const Header = (): JSX.Element => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <Logo variant={'h5'} component={'div'} onClick={() => dispatch(push('/'))} isLink={true} />
          <div className={classes.alignRight}>
            <IconButton onClick={handleMenu} color={'inherit'} className={classes.userIcon}>
              <AccountCircleIcon fontSize={'large'} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => dispatch(push('/mypage'))}>My Page</MenuItem>
              <Divider />
              <MenuItem onClick={() => dispatch(signOutFrom())}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
