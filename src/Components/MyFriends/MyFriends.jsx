import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import {
  Box,
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
import PopUpShared from './PopUpShared/PopUpShared'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function MyFriends({ width, height }) {
  const [friends, setFriends] = useState([])
  const [filterListFriend, setfilterListFriend] = useState([])
  const [open, setOpen] = useState(false)
  const [dataUser, setDataUser] = useState()

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
      const lowercaseSearchItem = searchItem.toLowerCase()
      const result = friends.filter((el) => {
        const lowercaseNick = el.nickname.toLowerCase()
        return lowercaseNick.includes(lowercaseSearchItem)
      })
      setfilterListFriend(result)
    } else {
      setfilterListFriend(friends)
    }
  }

  const handleOpen = (el) => {
    setOpen(true)
    setDataUser(el)
  }
  const handleClose = () => setOpen(false)

  const returnFriends = () => {
    if (friends && friends.length > 0) {
      return (
        <Paper  elevation={3}
        sx={{ padding: '24px', boxSizing: 'unset'}}>
          <SearchBar handleSearch={handleSearch} />
          <List className="myfriendslist">
            {filterListFriend.map((el) => (
              <ListItemText key={el.id}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <Typography variant="body" onClick={() => handleOpen(el)}>
                  {el.first_name} - <i>{el.nickname}</i>
                </Typography>
                {open && (
                  <PopUpShared
                  open={open}
                  handleClose={handleClose}
                  dataUser={dataUser}
                  
                  />
                  )}
              </ListItemText>
            ))}
          </List>
            </Paper>
      )
    } else {
      return (
        <>
          <Typography variant="body">
            Seguimos buscando... <br />
            <Link to="/home/friends" className="link">
              Añade algún amigo.
            </Link>
          </Typography>
        </>
      )
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{ padding: '24px', borderRadius: 4, boxSizing: 'unset'}}
      >
      <Typography variant="h5">
      <ButtonCustom props={{
          text: 'Mis Amigos',
          className:'button-header',
          navigate: '/home/friends',
          color: 'secondary'
        }}>
          </ButtonCustom>
        {/* <Link
          to="/home/friends"
          className="link"
          style={{ textDecoration: 'none' }}
          >
          Mis amigos
        </Link> */}
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnFriends()}
    </Paper>
  )
}
export default MyFriends
