import { Box, Grid, Paper } from '@mui/material'
import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'

function Friends() {
  return (
    <Box marginTop={'20px'}>
        <Grid container justifyContent={'space-around'} >
            <Grid item xs={6}>
                <MyFriends/>
            </Grid>
            <Grid item xs={3}>
                <Paper><SearchFriend/></Paper>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Friends