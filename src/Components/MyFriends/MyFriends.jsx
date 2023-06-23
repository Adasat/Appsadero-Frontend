import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import {
  Button,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import './MyFriends.css'
import SearchBar from './SearchBar/SearchBar'
import PopUpShared from './PopUpShared/PopUpShared'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function MyFriends({ width, height }) {
  const navigate = useNavigate()

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
        <Paper sx={{ padding: '24px', boxSizing: 'unset' }}>
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
      elevation={24}
      sx={{ padding: '24px', borderRadius: 2, boxSizing: 'unset' }}
    >
      <Typography variant="h5">
        <Button
          variant="contained"
          onClick={() => {
            navigate('/home/friends')
          }}
          sx={{ width: '100%' }}
        >
          Mis Amigos
        </Button>
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnFriends()}
    </Paper>
  )
}
export default MyFriends
