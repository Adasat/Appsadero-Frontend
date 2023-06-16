import { TextField } from '@mui/material'



function TextFieldCustom({ label, type, onChange}) {

  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      required
      margin="dense"
      fullWidth
      color="primary"
      onChange={(e) => onChange(e.target.value)}
      
    />

  )
}

export default TextFieldCustom
