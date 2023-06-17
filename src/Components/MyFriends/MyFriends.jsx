import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import { Card, Divider, List, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'

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
    if (friends && friends.length > 0){
      return (
    
        <Card sx={{padding:'30px'}}>
          <Typography variant="h5">Mis amigos</Typography>
          <Divider sx={{marginBottom:'10px'}}/>
          <List>
          {friends.map((el) => (
          <ListItemText key={el.id}>
            <ListItemIcon>
              <AccountCircle/>
            </ListItemIcon>
              <Typography variant='body'>{el.first_name} -   <i>{el.nickname}</i>  - {el.email} </Typography> 

            
            </ListItemText>
            ))}
          
          </List>
        </Card>
      )
    }else{
      return <Typography variant="h5">Seguimos buscando. <Link to =''>Añade algún amigo más</Link></Typography>
    } 
  }
  
  return returnFriends()
}

export default MyFriends
