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
    validEmail: false,
  })
  

  const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    if (emailValidator(e.target.value)) {
      setEmail({...email, value: (e.target.value), validEmail: true, msg: ''})
      handleEmail(email)
    } else {
      console.log(`color ${email.validEmail}`)
      setEmail({...email, validEmail: false, msg: 'Incorrect email entry'})
      handleEmail(email)
    }
  }

  return (
    <>
      <TextField
        label={'label'}
        type={'type'}
        variant="outlined"
        required
        margin="dense"
        fullWidth
        color={email.validEmail ? 'success' : 'error'}
        InputProps={{
          endAdornment: (
            <Mail/>
          )
        }}
        onChange={handleChange}
        helperText={email.msg}
      ></TextField>
    </>
  )
}

export default TextFieldEmail
