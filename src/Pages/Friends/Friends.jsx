import { useEffect, useState } from 'react'
import {
  addFriendByNickname,
  getAllUsers,
  getAllFriends,
} from '../../services/myFriends.service'
import { Alert, Box, Grid, Paper, Typography } from '@mui/material'

import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'
import { useParams } from 'react-router-dom'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'
import './Friends.css'

function Friends() {
  const [nickname, setNickname] = useState('')
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [AllFriends, setAllFriends] = useState('')
  

  const {nick} = useParams()
 


  const getUsers = async () => {
    const res = await getAllUsers()
    const result = await getAllFriends()

    setUsers(res)
    setAllFriends(result)
  }

  const handleSearchInput = (value) => {
    setNickname(value)
  }

  



  const handleButtonFriend = async () => {
    const user = users.find((el) => el.nickname === nickname)
    const friend = AllFriends.find((el) => el.nickname === nickname)

    if (friend) {
      setAlert('warning')
      setAlertMessage(`Esta persona ${nickname} ya está entre tus contactos`)
    
    } else if (localStorage.nickname === nickname){
      setAlert('warning')
      setAlertMessage(
        `Esta persona ${localStorage.nickname} eres tú. No puedes añadirte a tus contactos`
      )
    
    } else if (user) {

      await addFriendByNickname(nickname)
      setAlert('success')
      setAlertMessage(`Esta persona ${nickname}, añadido como contacto nuevo`)

      location.reload()
    } else {
      setAlert('error')
      setAlertMessage(
        `Esta persona ${nickname} no se encuentra en la aplicación`
      )
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <SubHeader menu='Mis amigos'/>
      <Box marginTop={'20px'} sx={{ height: '78vh' }}>
        <Grid container spacing={2} justifyContent={'space-around'}>
          <Grid item xs={8} sm={6}>
            <MyFriends width={'750px'} height={'50vh'} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Paper elevation={4} sx={{height: '150px'}}>
              <Box>
               <div className='search-container'>
              <SearchFriend onChange={handleSearchInput}
                onClick={handleButtonFriend} 
                />
                </div>
                </Box>
                </Paper>
              <Box marginBottom={2}>
                {alert && (
                  <Alert variant="outlined" severity={alert}>
                    {alertMessage}
                  </Alert>
                )}
              </Box>
          </Grid>
        </Grid>
        <Box
          marginTop={'20px'}
          marginRight={'20px'}
          sx={{ justifyContent: 'flex-end', textAlign: 'right' }}
        >
          <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
            "Un asadero sin amigos es como un parchis de un solo jugador"
          </Typography>
          <Typography variant="body">Nelson Mandela</Typography>
        </Box>
      </Box>
   </>
  )
}

export default Friends
