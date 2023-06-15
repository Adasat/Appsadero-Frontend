import { InputAdornment, TextField } from '@mui/material'
import { Mail, Visibility, VisibilityOff } from '@mui/icons-material'


function TextFieldInput({ label, type, onChange}) {

  /*  const visibilityPass  = (e) => {
    return (e === true) ? <VisibilityOff/> : <Visibility/>
  }
 */
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      required
      margin="dense"
      fullWidth
      color="primary"
      
    ></TextField>

  )
}

export default TextFieldInput
