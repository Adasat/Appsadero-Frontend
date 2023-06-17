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

function MyFriends() {
  const [friends, setFriends] = useState([])

  const listMyFriends = async () => {
    const res = await getAllFriends()
    setFriends(res)
  }

  useEffect(() => {
    listMyFriends()
  }, [])

  const returnFriends = () => {
    if (friends && friends.length > 0) {
      return (
        <Paper elevation={3} sx={{ padding: '30px', borderRadius: 10, width: 450 }}>
          <Typography variant="h5">Mis amigos</Typography>
          <Divider sx={{ marginBottom: '10px' }} />
          <List className='myfriendslist'>
            {friends.map((el) => (
              <ListItemText key={el.id}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <Typography variant="body">
                  {el.first_name} - <i>{el.nickname}</i> { /*- {el.email}*/}
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
