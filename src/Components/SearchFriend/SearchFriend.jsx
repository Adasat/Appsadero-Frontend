import {
  Box,
  Button,
  TextField,
} from '@mui/material'
import './SearchFriend.css'

function SearchFriend({ onClick, onChange }) {
  return (
    <Box sx={{ padding: '5px', display: 'flex', alignItems: 'center' }}>
      
      <div className='container-search'>

      <TextField
        variant="standard"
        label="Buscar amigo por nickname..."
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: '100%', marginRight: '30px', padding: '5px'}}
        ></TextField>
        </div>
      
      <div className='container-button'>


     <Button
        variant="contained"
        sx={{ justifyItems: 'right' }}
        onClick={() => onClick()}
        >
        Buscar
      </Button> 
        </div>
    </Box>
  )
}

export default SearchFriend
