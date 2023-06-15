import { TextField } from '@mui/material'
import { Mail } from '@mui/icons-material'
import { useState } from 'react'


function TextFieldEmail() {
  const [email, setEmail] = useState('')
  const [statusEmail, setStatusEmail] = useState(false)
  const [msgEmail, setMsgEmail] = useState('')

  const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleEmail = (e) => {
    if (emailValidator(e.target.value)) {
      setEmail(e.target.value)
      setStatusEmail(true)
      setMsgEmail('')
    } else {
      setStatusEmail(false)
      setMsgEmail('Formato de email incorrecto.')
    }
  }

  return (
    <>
      <TextField
        variant="outlined"
        required
        margin="dense"
        fullWidth
        type='email'
        InputProps={{
          endAdornment: (
            <Mail/>
          )
        }}
        onChange={(e) => handleEmail(e)}
        color={statusEmail ? 'success' : 'error'}
        helperText={msgEmail}
      ></TextField>
    </>
  )
}

export default TextFieldEmail
