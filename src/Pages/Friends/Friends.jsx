import { useEffect, useState } from 'react'
import {
  addFriendByNickname,
  getAllUsers,
  getAllFriends,
} from '../../services/myFriends.service'
import { Alert, Box, Grid, Paper, Typography } from '@mui/material'

import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'


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
    if (friend) {
      setAlert('warning')
      setAlertMessage(`Este usuario ${nickname} ya está entre tus amigos`)
    } else if (user) {
      await addFriendByNickname(nickname)
      setAlert('success')
      setAlertMessage(`Usuario ${nickname}, añadido como amigo`)

      location.reload()
    } else {
      setAlert('error')
      setAlertMessage(
        `Este usuario ${nickname} no se encuentra en la aplicación`
      )
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box marginTop={'20px'} sx={{ height: '78vh' }}>
      <Grid container spacing={2} justifyContent={'space-around'}>
        <Grid item xs={8} sm={6}>
          <MyFriends width={'750px'} height={'50vh'} />
        </Grid>
        <Grid item xs={4} sm={3}>
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
    <Box marginTop={'20px'} marginRight={'20px'} sx={{ justifyContent: 'flex-end', textAlign: 'right'}}>
        <Typography variant='h5' sx={{ fontStyle: 'italic'}}> "Un asadero sin amigos es como un parchis de un solo jugador" </Typography>
        <Typography variant='body'>Nelson Mandela</Typography>
    </Box>
  </Box>
  )
}

export default Friends
