import { TextField, IconButton } from '@mui/material'
import { useState} from 'react'
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@mui/icons-material'

  function TextFieldPassword ({ handlePassword, label }) {
    
    TextFieldPassword.propTypes = {
      handlePassword: PropTypes.func.isRequired
    };

    const [password, setPassword] = useState({
      label: '',
      value: '',
      validPassword: false,
      msg: '',
      iconVisible: false,

    })

    const passValidator = (password) => {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        return regex.test(password)
      }

  const handleChange = (e) => {
    if (passValidator(e.target.value)) {
    setPassword({...password,
      value: e.target.value,
      validPassword: true,
      msg: ''})
    handlePassword(password)
    } else {
      setPassword({
        ...password,
        validPassword: false,
        msg: 'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial ',
      })
    }
  }

  const handlePassVisible = () => {
    setPassword({...password, iconVisible: !password.iconVisible })
  }

  return (
    <>
      <TextField
        label={label}
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
        onBlur={handleChange}
        color={password.validPassword ? 'success' : 'error'}
        helperText={password.msg}
      ></TextField>
    </>
  )
}

export default TextFieldPassword
