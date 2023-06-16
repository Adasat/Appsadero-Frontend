import { TextField, IconButton } from '@mui/material'
import { useState} from 'react'
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@mui/icons-material'

  function TextFieldPassword ({ handlePassword }) {
    
    TextFieldPassword.propTypes = {
      handlePassword: PropTypes.func.isRequired
    };

    const hasError = (password) => {
      return password.length <= 5
    } 
  
       const [isPassVisible, setIsPassVisible] = useState(false)
       const [statusPassword, setStatusPassword] = useState(false)
         const [msgPassword, setMsgPassword] = useState('')

       const passValidator = (password) => {
         const regex =
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
         return regex.test(password)
       }


    const [password, setPassword] = useState({
      value: '',
      validPassword: false
      
    })

  const handleChange = (e) => {
    setPassword({...password, value: e.target.value, validPassword: hasError(e.target.value)})
    handlePassword(password)
  }


   const handlePassword = (e) => {
     console.log('Albaricoque')
     if (passValidator(e.target.value)) {
       console.log('manzana')
       setPassword(e.target.value)
       console.log(statusPassword)

       setStatusPassword(true)
       setMsgPassword('')
     } else {
       setStatusPassword(false)
       setMsgPassword(
         'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial '
       )
     }
   }

   const handlePassVisible = () => {
     setIsPassVisible(!isPassVisible)
   }
 

   return (
     <>
       <TextField
         label={label}
         variant="outlined"
         required
         margin="dense"
         fullWidth
         type={isPassVisible ? 'text' : 'password'}
         InputProps={{
           endAdornment: (
             <IconButton onClick={handlePassVisible}>
               {isPassVisible ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           ),
         }}
         onChange={(e) => handlePassword(e)}
         color={statusPassword ? 'success' : 'error'}
         helperText={msgPassword}
       ></TextField>
     </>
   )

  /*
  return (

    <TextField
      label='Contraseña'
      type= 'password'
      variant="outlined"
      required
      error={password.validPassword}
      value={password.value}
      margin="dense"
      fullWidth
      color="primary"
      onChange={handleChange}
      onBlur={handleChange}
    >
    </TextField>

  )
  */
}

export default TextFieldPassword
