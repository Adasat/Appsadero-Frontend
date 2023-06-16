
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userSignup } from '../../services/auth.service'

import { Typography, Box, Grid, Paper, Button, Link, TextField, IconButton } from '@mui/material'

//import TextFieldInput from '../../Components/TextFieldCustom/TextFieldCustom'
import TextFieldEmail from '../../Components/TextFieldEmail/TextFieldEmail'
import TextFieldPassword from '../../Components/TextFieldPassword/TextFieldPassword'

import './Signup.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'



function Signup() {
/*   const navigate = useNavigate()
 */
  const [first_name, setName] = useState('')
  const [nickname, setNickname] = useState('')
                                                                                 
  const [email, setEmail] = useState({
    value: '',
    msg: '',
    valid: false
  })

  const [password, setPassword] = useState({
    value: '',
    msg: '',
    validPassword: false
  })
  
  const [passwordRepeat, setPasswordRepeat] = useState({
    value: '',
    validPassword: false,
    msg: '',
    iconVisible: false,
  })

  

  const handlePassVisible = () => {
    setPasswordRepeat({
      ...passwordRepeat,
      iconVisible: !passwordRepeat.iconVisible,
    })
  }

  const handlePassword = (password) => {
    setPassword({ ...password, password })
  }
  
  const handleRepeatPassword = (e) => {
    setPasswordRepeat({ ...passwordRepeat, value: e.target.value })

  }

  const validatePasswords = () => {
      password.value === passwordRepeat.value ? passwordRepeat.validPassword = true : passwordRepeat.validPassword = false
      passwordRepeat.validPassword ? passwordRepeat.msg = '' : passwordRepeat.msg = 'Las contraseñas no coinciden'
  }

  const handleEmail = (email) => {
    setEmail({ ...email, email })
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleNickName = (e) => {
   setNickname(e.target.value)
  }
  
  const signupButton = async () => {
    
      if (validatePasswords) {
        await userSignup(first_name, nickname, email.value, passwordRepeat.value)
/*         navigate('/login')
 */      } else {
        alert('Las contraseñas no coinciden')
      }
  }

  return (
    <div className="grid-contentSignup">
      <Paper elevation={24}>
        <Grid
          container
          component="main" //Principal container
          height="73vh"
          width="60vw"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              backgroundImage:
                'url(https://source.unsplash.com/random?bbq,grill)',
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
              <Typography
                component="h1"
                variant="h5"
                sx={{ marginTop: '25px' }}
              >
                Regístrate
              </Typography>

              <Box component="form" noValidate sx={{ m: 4 }}>
                <TextField
                  label="Introduce tu nombre"
                  type="text"
                  variant="outlined"
                  required
                  margin="dense"
                  fullWidth
                  color="primary"
                  onChange={handleName}
                />
                <TextField
                  label="Introduce un nickname"
                  type="text"
                  variant="outlined"
                  required
                  margin="dense"
                  fullWidth
                  color="primary"
                  onChange={handleNickName}
                />
                <TextFieldEmail handleEmail={handleEmail} />
                <TextFieldPassword
                  label="Introduzca una contraseña"
                  handlePassword={handlePassword}
                />
                <TextField
                  label="Repite la contraseña"
                  type={passwordRepeat.iconVisible ? 'text' : 'password'}
                  variant="outlined"
                  required
                  margin="dense"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handlePassVisible}>
                        {passwordRepeat.iconVisible ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    ),
                  }}
                  color={passwordRepeat.validPassword ? 'success' : 'error'}
                  onChange={handleRepeatPassword}
                  helperText={passwordRepeat.msg}
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signupButton}
                >
                  Signup
                </Button>
                <Grid container>
                  <Grid item xs>
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/login" variant="body2">
                      {' '}
                      aquí
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Signup