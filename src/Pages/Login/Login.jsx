import { useState } from 'react'
import { Avatar, Box, Button, Grid, Typography, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './Login.css'
import { tryLogin } from '../../services/auth.service'
import { Link, useNavigate } from 'react-router-dom'
import TextFieldPassword from '../../Components/TextFieldPassword/TextFieldPassword'
import TextFieldEmail from '../../Components/TextFieldEmail/TextFieldEmail'

function LogIn() {
  const navigate = useNavigate()

  const [password, setPassword] = useState({
    value: '',
    validPassword: false,
  })

  const [email, setEmail] = useState({
    label: '',
    value: '',
    msg: '',
    valid: false,
  })

  const handlePassword = (password) => {
    setPassword({ ...password, password })
  }

  const handleEmail = (email) => {
    setEmail({ ...email, email })
  }

  const doLogin = async () => {
    try {
      const res = await tryLogin(email.value, password.value)
      if (res) {
        navigate('/home/dashboard')
      }
    } catch (err) {
      return err
    }
  }

  return (
    <div className="grid-content">
      <Paper elevation={24}>
        <Grid
          container
          component="main" //Principal container
          height="60vh"
          width="60vw"
        >
          {/*Grid Img*/}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?bbq)',
              backgroundSize: 'cover',
            }}
          ></Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              maxHeight="350px"
            >
              <Avatar sx={{ m: 1, mt: 4 }}>
                <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>

              <Box component="form" noValidate sx={{ m: 4 }}>
                <TextFieldEmail key={1} handleEmail={handleEmail} />

                <TextFieldPassword
                  key={2}
                  label="Contraseña"
                  handlePassword={handlePassword}
                />

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={doLogin}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    {
                      // <Link variant="body2">Forgot password?</Link>
                    }
                  </Grid>
                  <Grid item>
                    <Link className="link" to={'/signup'}>
                      {'No tengo cuenta. Quiero registrarme.'}
                    </Link>
                  </Grid>
                </Grid>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ mt: 5 }}
                ></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default LogIn
