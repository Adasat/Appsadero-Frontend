import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HeaderWelcome() {
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
            </IconButton>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center', m: 2 }}
            >
              <Link className="links" to="/">
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
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderWelcome