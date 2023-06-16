import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'
import { Card, Link, List, ListItemText, Typography } from '@mui/material'

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
    if (friends.length !== 0){
      return (
    
        <Card>
          <Typography variant="h5">mis amigos</Typography>
          <List>
          {friends.map((el) => <ListItemText key={el.id}>{el.first_name}</ListItemText>)}

          </List>
        </Card>
    
      )
    }else{
      <Typography variant="h5">Seguimos buscando. <Link>Añade algún amigo</Link></Typography>
    } 
  }
  
  return returnFriends()
}

export default MyFriends
