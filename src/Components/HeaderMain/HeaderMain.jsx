import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile'

function HeaderMain({title}) {
  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: 10}}>
        <AppBar position="static" sx={{ height: '70px' }}>
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}
            >
              <Link className="links" to="/home/dashboard">
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