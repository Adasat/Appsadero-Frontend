import { useEffect, useState } from 'react';
import {  Link ,Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Paper, InputAdornment, IconButton } from '@mui/material'
import { LockOutlined, TryOutlined, Visibility } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './Login.css'
//import { loging } from '../../services/auth';

function LogIn() {
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  
  //Email Format Validation
  const isEmail = () => {
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
    return regexEmail.test(email)
  }

  const isPassword = () => {
    return password.length > 6
  }


  const doLogin = async () => {
    try {
        //const res = 
        //pasar contraseña e email al servicio para comprobar datos contra la db
    } catch (err) {
      
    }
  }

  /*
 async function onLogin() {
   try {
     const loginResponse = await loging({ email, password });
     localStorage.setItem("token", loginResponse);
   } catch (err) {
      console.log(err)
   }
 }

 
 useEffect(() => {

  onLogin()
LogIn
  },[])
  
  
*/
  return (
    <div className="grid-content">
      <Paper elevation={24}>
        <Grid
          container
          component="main" //Principal container
          height="80vh"
          width="80vw"
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
              // backgroundColor= '#F1F1F1'
              //backgroundColor= '#795548'
              maxHeight="350px"
            >
              <Avatar sx={{ m: 1, mt: 4 }}>
                <AccountCircleIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>

              <Box component="form" noValidate sx={{ m: 4 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  value={email}
                  label="Email Address"
                  autoComplete="email"
                  /*InputProps={{
                    startAdornment: (
                      <InputAdornment><IconButton><Visibility/></IconButton></InputAdornment>
                    ),
                  }}*/
                  autoFocus
                  onChange={(e) => {
                    SetEmail(e.target.value)
                  }}
                  onBlur={(e) => {
                    !isEmail() && error
                  }}
                  type="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    SetPassword(e.target.value)
                  }}
                  onBlur={(e) => {
                    !isPassword() && error
                  }}
                />
                {/*
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label="Remember me"
                />
                */}
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(e) => console.log('asd')}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link variant="body2">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 5 }}>
                  {'Copyright © '}
                  <Link color="inherit" href="https://mui.com/">
                    Chuletapp Company
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default LogIn
