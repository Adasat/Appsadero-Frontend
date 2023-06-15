import { TextField } from '@mui/material'
import { useState} from 'react'
import PropTypes from 'prop-types';

  function TextFieldPassword ({ handlePassword }) {
    
    TextFieldPassword.propTypes = {
      handlePassword: PropTypes.func.isRequired
    };

    const hasError = (password) => {
      return password.length <= 6
    } 
  
    const [user, setUser] = useState({
      password: '',
      validPassword: false
    })

  const handleChange = (e) => {
    setUser({...user, password: e.target.value, validPassword: hasError(user.password)})
    console.log(user.password)
    handlePassword(user)
  }
  
  return (

    <TextField
      label='Contraseña'
      type= 'password'
      variant="outlined"
      required
      error={user.validPassword}
      value={user.password}
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
