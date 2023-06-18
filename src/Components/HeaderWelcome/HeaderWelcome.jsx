import { Button } from '@mui/base'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function HeaderWelcome({ title }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: '70px' }}>
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}
            >
              <Link className="links" to="/">
                {title}
              </Link>
            </Typography>
            <Button>login</Button>
            <Button>signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderWelcome
