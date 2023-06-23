import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function HeaderWelcome({ title }) {

  const navigate = useNavigate()

  const handleLogin = () => {
   
  }

  const handleSignup = () => {
    
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
            <Button color='accent' variant="contained" onClick={() => {  navigate('/login')}}> Login </Button>
            <Button color='secondary' variant="contained" onClick={() => { navigate('/signup')}}> SignUp </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default HeaderWelcome
