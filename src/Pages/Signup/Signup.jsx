import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userSignup } from '../../services/auth.service'

import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Link,
  TextField,
  IconButton,
} from '@mui/material'

//import TextFieldInput from '../../Components/TextFieldCustom/TextFieldCustom'
import TextFieldEmail from '../../Components/TextFieldEmail/TextFieldEmail'
import TextFieldPassword from '../../Components/TextFieldPassword/TextFieldPassword'

import './Signup.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Signup() {
    const navigate = useNavigate()
  
  const [first_name, setName] = useState('')
  const [nickname, setNickname] = useState('')

  const [email, setEmail] = useState({
    value: '',
    msg: '',
    valid: false,
  })

  const [password, setPassword] = useState({
    value: '',
    msg: '',
    validPassword: false,
  })

  const [passwordRepeat, setPasswordRepeat] = useState({
    value: '',
    validPassword: false,
    msg: '',
    iconVisible: false,
  })

  const [flag, setFlag] = useState(false)

  

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
    console.log("Contraseña" + password.value +  'Contraseña2:' + passwordRepeat.value)
    password.value === passwordRepeat.value/* 
      ? (passwordRepeat.validPassword = true)
      : (passwordRepeat.validPassword = false)
    passwordRepeat.validPassword */
      ? (passwordRepeat.msg = '')
      : (passwordRepeat.msg = 'Las contraseñas no coinciden')
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
    validatePasswords()
    if (passwordRepeat.validPassword) {
      await userSignup(first_name, nickname, email.value, passwordRepeat.value)
        navigate('/login')

    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        margin: 'auto',
        width: '80vw',
        height: '78vh',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        flexGrow: 1,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: 'flex',
          height: '78vh',
          width: '60vw',
          maxWidth: '1000px',
        }}
      >
        <Grid
          container
          component="main" // Principal container
          height="100%" // Ajustar la altura al 100% del Paper
          width="100%" // Ajustar el ancho al 100% del Paper
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
              height: '100%', // Ajustar la altura al 100% del Grid item
            }}
          ></Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              maxWidth="450px" // Limitar el ancho del formulario
              mx="auto" // Centrar el formulario horizontalmente
              p={4} // Agregar un espaciado interno al formulario
            >
              <Typography component="h1" variant="h5">
                Regístrate
              </Typography>

              <Box
                component="form"
                noValidate
                sx={{ mt: 4, width: '100%', height: '100vh' }}
              >
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
                ¿Ya tienes cuenta? {'   '}
                <Link to="/login" variant="body2">
                  Pincha aquí
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Signup
