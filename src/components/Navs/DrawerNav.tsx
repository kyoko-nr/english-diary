import { Drawer } from '@material-ui/core'
import { useState } from 'react'
import { ArchiveList } from 'components/Archive/index'

const DrawerNav = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(true)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        // sx={{
        //   display: { xs: 'block', sm: 'none' },
        //   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        // }}
      >
        <ArchiveList />
      </Drawer>
      <Drawer
        variant="permanent"
        // sx={{
        //   display: { xs: 'none', sm: 'block' },
        //   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 320 },
        // }}
        open
      >
        <ArchiveList />
      </Drawer>
    </>
  )
}
export default DrawerNav
