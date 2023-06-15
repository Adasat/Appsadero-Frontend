import { TextField } from '@mui/material'

function TextFieldInput({ label, type, InputAdorment, onChange }) {
  return (
    <TextField
      label={label}
      type={type}
      variant="contained"
      required
      margin="dense"
      fullWidth
      color="primary"
      sx={{ backgroundColor: 'white' }}
      InputAdorment={InputAdorment}
      onChange={(e) => onChange(e.target.value)}
    ></TextField>
  )
}

export default TextFieldInput
