import { Alert, Box, Grid, Paper } from '@mui/material'
import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'
import { useEffect, useState } from 'react'
import {
  addFriendByNickname,
  getAllUsers,
} from '../../services/myFriends.service'

function Friends() {
  const [nickname, setNickname] = useState('')
  const [friends, setFriends] = useState([])
  const [alert, setAlert] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  const getUsers = async () => {
    const res = await getAllUsers()
    setFriends(res)
  }

  const handleSearchInput = (value) => {
    setNickname(value)
  }

  const handleButtonFriend = async () => {
    const friend = friends.find((el) => el.nickname === nickname);
    if (friend) {
        await addFriendByNickname(nickname);
        setAlert('success')
        setAlertMessage('Usuario añadido como amigo');
        
        location.reload()
    } else {
        setAlert('error');
        setAlertMessage('Este usuario no está en nuestra BBDD');
    }
}

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box marginTop={'20px'}>
      <Grid container justifyContent={'space-around'}>
        <Grid item xs={6}>
          <MyFriends />
        </Grid>
        <Grid item xs={3}>
          <Paper>
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
