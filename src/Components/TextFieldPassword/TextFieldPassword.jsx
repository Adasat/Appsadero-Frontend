import { TextField } from '@mui/material'
import { useState} from 'react'
import PropTypes from 'prop-types';

  function TextFieldPassword ({ handlePassword }) {
    
    TextFieldPassword.propTypes = {
      handlePassword: PropTypes.func.isRequired
    };

    const hasError = (password) => {
      return password.length <= 5
    } 
  
    const [password, setPassword] = useState({
      value: '',
      validPassword: false
    })

  const handleChange = (e) => {
    setPassword({...password, value: e.target.value, validPassword: hasError(e.target.value)})
    handlePassword(password)
  }
  
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
}

export default TextFieldPassword
