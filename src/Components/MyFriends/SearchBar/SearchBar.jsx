import { IconButton, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

function SearchBar({ handleSearch }) {
  const searchFriend = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div>
      <TextField
        id="search-bar"
        onChange={searchFriend}
        variant="outlined"
        placeholder="Busca por nick..."
        size="small"
        style={{width: '80%' }}
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </div>
  )
}

export default SearchBar
