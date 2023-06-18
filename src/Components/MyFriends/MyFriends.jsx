import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import './MyFriends.css'
import SearchBar from './SearchBar/SearchBar'

function MyFriends() {
  const [friends, setFriends] = useState([])
  const [filterListFriend, setfilterListFriend] = useState([])

  const listMyFriends = async () => {
    const res = await getAllFriends()
    setFriends(res)
    setfilterListFriend(res)
  }

  useEffect(() => {
    listMyFriends()
  }, [])

  const handleSearch = (searchItem) => {
    if (searchItem.length > 0) {
      const lowercaseSearchItem = searchItem.toLowerCase();
      const result = friends.filter((el) => {
        const lowercaseNick = el.nickname.toLowerCase()
        return lowercaseNick.includes(lowercaseSearchItem)
      })
      setfilterListFriend(result)
    } else {
      setfilterListFriend(friends)
    }
  }

  const returnFriends = () => {
    if (friends && friends.length > 0) {
      return (
        <Paper
          elevation={3}
          sx={{ padding: '30px', borderRadius: 10, width: 450 }}
        >
          <Typography variant="h5">Mis amigos</Typography>
          <Divider sx={{ marginBottom: '10px' }} />
          <SearchBar handleSearch={handleSearch}/>
          <List className="myfriendslist">
            {filterListFriend.map((el) => (
              <ListItemText key={el.id}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <Typography variant="body">
                  {el.first_name} - <i>{el.nickname}</i> {/*- {el.email}*/}
                </Typography>
              </ListItemText>
            ))}
          </List>
        </Paper>
      )
    } else {
      return (
        <Typography variant="h5">
          Seguimos buscando. <Link to="">Añade algún amigo más</Link>
        </Typography>
      )
    }
  }

  return returnFriends()
}

export default MyFriends
