import { TextField } from '@mui/material'



function TextFieldCustom({ label, type, onChange, multiline, rows}) {

  return (
    <TextField
      multiline={multiline}
      rows={rows}
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
