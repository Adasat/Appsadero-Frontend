import { IconButton, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import './SearchBar.css'

function SearchBar({ handleSearch }) {
  const searchFriend = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div className='search-bar'>
      <TextField
        id="search-bar"
        onChange={searchFriend}
        variant="outlined"
        placeholder="Busca por nick..."
        size="small"
        style={{width: '100%' }}
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </div>
  )
}

export default SearchBar
