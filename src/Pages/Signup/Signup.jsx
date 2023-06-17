import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userSignup } from '../../services/auth.service'

import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@mui/material'

import TextFieldEmail from '../../Components/TextFieldEmail/TextFieldEmail'
import TextFieldPassword from '../../Components/TextFieldPassword/TextFieldPassword'
import TextFieldCustom from '../../Components/TextFieldCustom/TextFieldCustom'


import './Signup.css'
import { CheckBox } from '@mui/icons-material'


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

  const handleName = (value) => {
    setName(value)
  }
  const handlePassword = (password) => {
    setPassword({ ...password, password })
  }

  const handleEmail = (email) => {
    setEmail({ ...email, email })
  }

   const handleNickName = (value) => {
    setNickname(value)
  }

  const signupButton = async () => {
    if(email.valid && password.validPassword){
      await userSignup(first_name, nickname, email.value, password.value)
        navigate('/login')
    }else{
      alert("Por favor, revisa los campos introducidos")
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
              maxWidth="500px" // Limitar el ancho del formulario
              mx="auto" // Centrar el formulario horizontalmente
              p={2} // Agregar un espaciado interno al formulario
            >
              <Typography component="h1" variant="h6">
                Regístrate
              </Typography>

              <Box
                component="form"
                noValidate
                sx={{mt: 2, width: '100%', height: '70vh' }}
              >
                <TextFieldCustom label="Introduce tu nombre" type="text" onChange={handleName} />
                <TextFieldCustom label="Introduce tu nickname" type="text" onChange={handleNickName} />
                <TextFieldEmail handleEmail={handleEmail} />
                <TextFieldPassword
                  label="Introduzca una contraseña"
                  handlePassword={handlePassword}
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
