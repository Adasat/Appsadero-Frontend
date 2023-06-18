import { Alert, Box, Grid, Paper } from '@mui/material'
import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'
import { useEffect, useState } from 'react'
import {
  addFriendByNickname,
  getAllUsers,
  getAllFriends
} from '../../services/myFriends.service'

function Friends() {
  const [nickname, setNickname] = useState('')
  const [friends, setFriends] = useState([])
  const [alert, setAlert] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [AllFriends, setAllFriends] = useState('')

  const getUsers = async () => {
    const res = await getAllUsers()
    const result = await getAllFriends()
    setFriends(res)
    setAllFriends(result)
  }

  const handleSearchInput = (value) => {
    setNickname(value)
  }

  const handleButtonFriend = async () => {
    const user = friends.find((el) => el.nickname === nickname)
    const friend = AllFriends.find((el) => el.nickname === nickname)
    if (friend){
        setAlert('warning');
        setAlertMessage(`Este usuario ${nickname} ya está entre tus amigos`);
    
    } else if (user) {
        await addFriendByNickname(nickname);
        setAlert('success')
        setAlertMessage(`Usuario ${nickname}, añadido como amigo`);
        
        location.reload()

     
    
    } else {
        setAlert('error');
        setAlertMessage(`Este usuario ${nickname} no se encuentra en la aplicación`);
    }
}

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box marginTop={'20px'}>
      <Grid container spacing={2} justifyContent={'space-evenly'}>
        <Grid item xs={6}>
          
          <MyFriends />
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={7}>
            <SearchFriend
              onChange={handleSearchInput}
              onClick={handleButtonFriend}
            />
            <Box marginBottom={2}>
              {alert && (
                <Alert variant="outlined" severity={alert}>
                  {alertMessage}
                </Alert>
              )}
            </Box>



          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Friends
