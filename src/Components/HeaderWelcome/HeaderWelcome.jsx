import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function HeaderWelcome({ title }) {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/signup')
  }

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
            <div style={{ display: 'flex', gap: '30px'  }}>
              <ButtonCustom props={{ navigate: '/login', text: 'Login' }} handleButton={handleLogin}/>
              <ButtonCustom props={{ navigate: '/signup', text: 'Signup' }} handleButton={handleSignup}/>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderWelcome
