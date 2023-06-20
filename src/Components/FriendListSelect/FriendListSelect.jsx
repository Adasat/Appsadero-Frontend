import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import {
  Checkbox,
  Divider,
  FormControl,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { Form, Link } from 'react-router-dom'
import { AccountCircle, CheckBox } from '@mui/icons-material'
import './FriendListSelect.css'
import SearchBar from './SearchBar/SearchBar'

function FriendListSelect({handleFriends}) {
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
  
      const [checked, setChecked] = useState([])
  


      const handleCheckChange = (index) => {
        //index => friend ID
        setChecked((allreadyChecked)=>{
          //Si arrayChecked incluye 
          if(allreadyChecked.includes(index)){
            return allreadyChecked.filter((checked) => checked !== index)
          } else {

            return [...allreadyChecked, index]

          }
        })
        
        handleFriends(checked)
      }

  const returnFriends = () => {
    if (friends && friends.length > 0) {
      return (
        <>
          <SearchBar handleSearch={handleSearch} />
          <Divider sx={{ m: 2 }}></Divider>
          <List className="ListSelect">
            {filterListFriend.map((el) => (
              <ListItemButton key={el.id} className='list-item'>
                <Checkbox
                  checked={checked.includes(el.id)}
                  onChange={() => handleCheckChange(el.id)}
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{justifyItems: '5px'}}/>
                <Typography variant="body">
                  {el.first_name} - <i>{el.nickname}</i>
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </>
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
    <>
      <Typography variant="h5" sx={{display:'flex', justifyContent:'center'}}>
        <Link
          to="/home/friends"
          className="link"
          style={{ textDecoration: 'none' }}
          >
          Mis amigos
        </Link>
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnFriends()}
          </>
  )
}
export default FriendListSelect
