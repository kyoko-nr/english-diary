import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Divider, IconButton, Menu, MenuItem, Toolbar, Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { signOutFrom } from 'reducks/users/operations'
import { Logo } from 'components/UIKit/index'
import { useState } from 'react'

const Header = (): JSX.Element => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <AppBar color="secondary" position="fixed" className="flex-center">
      <Toolbar
        sx={{
          maxWidth: 1280,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Logo variant={'h5'} component={'div'} onClick={() => dispatch(push('/'))} isLink={true} />
        <Box sx={{ margin: '0 0 0 auto' }}>
          <IconButton className="grey-text" onClick={handleMenu}>
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
            <MenuItem onClick={() => dispatch(push('/mydictionary'))}>My Dictionary</MenuItem>
            <Divider />
            <MenuItem onClick={() => dispatch(signOutFrom())}>Log out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
