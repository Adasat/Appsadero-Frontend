import {  SearchTwoTone } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"


function SearchFriend() {
  return (
    <Box sx={{ padding:'5px'}}>
        
        <TextField           
            variant="standard"
            label="Añade nuevos amigos..." 
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <SearchTwoTone />
                    </InputAdornment>
                    )
            }}>
          </TextField>
          
    </Box>
  )
}

export default SearchFriend