import { Box, Button, TextField } from "@mui/material"


function SearchFriend({onClick, onChange}) {


  return (
    <Box sx={{ padding:'5px', display:'flex', alignItems:'center'}}>
        
        <TextField           
            variant="standard"
            label="Añade nuevos amigos..." 
            onChange={(e) => onChange(e.target.value)}
            sx={{width:'80%'}}
            >
          </TextField>
          
<Button variant="contained" sx={{justifyItems:'right'}} onClick={() => onClick()}>Buscar</Button>    </Box>
  )
}

export default SearchFriend