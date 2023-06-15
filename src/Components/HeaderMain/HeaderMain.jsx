import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile'

function HeaderMain({title}) {
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ height: '70px' }}>
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}
            >
              <Link className="links" to="/dashboard">
                {title}
              </Link>
            </Typography>
            <Profile/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderMain

/*

  menu hamburguesa, en ppio no es necesario

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

*/