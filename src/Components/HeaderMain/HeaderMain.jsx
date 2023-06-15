import { AccountCircle, Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function HeaderMain() {
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ height: '70px' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link className="links" to="/dashboard">
                <Menu />
              </Link>
            </IconButton>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}
            >
              <Link className="links" to="/dashboard">
                APPSADERO
              </Link>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link className="links" to="/myprofile">
                <AccountCircle />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderMain
