import { TextField, IconButton } from '@mui/material'
import { useState} from 'react'
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@mui/icons-material'

  function TextFieldPassword ({ handlePassword, label }) {
    
    TextFieldPassword.propTypes = {
      handlePassword: PropTypes.func.isRequired
    };
   
    const [password, setPassword] = useState({
      value: '',
      validPassword: false,
      msg: '',
      iconVisible: false,

    })

    const passValidator = (password) => {
        const regex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/
        return regex.test(password)
      }

  const handleChange = (e) => {
    handlePassword(password)
    if (passValidator(e.target.value)) {
    setPassword({
      value: e.target.value,
      validPassword: true,
      msg: ''})
    } else {
      setPassword({
        ...password,
        value: e.target.value,
        validPassword: false,
        msg: 'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y dos carácteresespeciales ',
      })
    }
  }

   const handlePassVisible = () => {
     setPassword({...password, iconVisible: !password.iconVisible})
   }
 

   return (
     <>
      
       <TextField
         label="Contraseña"
         variant="outlined"
         required
         margin="dense"
         fullWidth
         type={password.iconVisible ? 'text' : 'password'}
         InputProps={{
           endAdornment: (
             <IconButton onClick={handlePassVisible}>
               {password.iconVisible ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           ),
         }}
         onChange={handleChange}
         color={password.validPassword ? 'success' : 'error'}
         helperText={password.msg}
       ></TextField>
     </>
   ) 
}

export default TextFieldPassword
