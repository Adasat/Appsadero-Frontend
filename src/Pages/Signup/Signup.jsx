
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import { userSignup } from '../../services/auth.service'

import { Typography, Box, Grid, Paper, Button, Link, TextField } from '@mui/material'

//import TextFieldInput from '../../Components/TextFieldCustom/TextFieldCustom'
import TextFieldEmail from '../../Components/TextFieldEmail/TextFieldEmail'
import TextFieldPassword from '../../Components/TextFieldPassword/TextFieldPassword'

import './Signup.css'



function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailRepeat, setEmailRepeat] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  /* const [isPassVisible, setIsPassVisible] = useState(false)
  const [isRepPassVisible, setIsRepPassVisible] = useState(false)

  const handlePassVisible = () => {
    setIsPassVisible(!isPassVisible)
  }
  const handleRepPassVisible = () => {
    setIsRepPassVisible(!isRepPassVisible)
  }

  //Manage the user's data
  
  const handlePassword = (value) => {
    setPassword(value)
  }

  const handlePasswordRepeat = (value) => {
    setPasswordRepeat(value)
  } */

  const signupButton = async () => {
    if (email === emailRepeat) {
      if (password == passwordRepeat) {
        // await signup(name, email, password)
        navigate('/login')
      }
      alert('Las contraseñas no coinciden')
    }
    alert('los emails introducidos no coinciden')
    
  }

  return (
    <div className="grid-contentSignup">
      <Paper elevation={24}>
        <Grid
          container
          component="main" //Principal container
          height="80vh"
          width="80vw"
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
                  label="Introduce tu nombre y apellido"
                  type="text"
                  variant="outlined"
                  required
                  margin="dense"
                  fullWidth
                  color="primary"
                  onChange={handleName}
                />

                <TextFieldEmail label="Introduce un email"/>
                <TextFieldEmail label="Repita el correo introducido"/>
                <TextFieldPassword label='Introduce una contraseña'/>
                <TextFieldPassword label='Repita su contraseña'/>

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
                <Typography variant="body2" align="center" sx={{ mt: 5 }}>
                  {'Copyright © '}
                  <Link color="inherit" href="https://mui.com/">
                    Chuletapp Company
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {''}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Signup