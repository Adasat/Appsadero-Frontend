import { TextField } from '@mui/material'
import { Mail } from '@mui/icons-material'
import { useState } from 'react'
import PropTypes from 'prop-types';


function TextFieldEmail({handleEmail}) {

  TextFieldEmail.propTypes = {
    handleEmail: PropTypes.func.isRequired
  };

  const [email, setEmail] = useState({
    value: '',
    msg: '',
    valid: false,
  })
  

  const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    if (emailValidator(e.target.value)) {
      setEmail({...email, value: (e.target.value), valid: true, msg: ''})
      handleEmail(email)
    } else {
      setEmail({...email, valid: false, msg: 'Formato de email incorrecto.'})
      handleEmail(email)
    }
  }

  return (
    <>
      <TextField
      
        label='Email'
        type='email'
        variant="outlined"
        required
        margin="dense"
        fullWidth
        color={email.valid ? 'success' : 'error'}
        InputProps={{
          endAdornment: (
            <Mail/>
          )
        }}
        onChange={handleChange}
        onBlur={handleChange}
        helperText={email.msg}
      ></TextField>
    </>
  )
}

export default TextFieldEmail
