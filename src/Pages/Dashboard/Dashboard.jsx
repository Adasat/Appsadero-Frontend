import { Box, Card, Divider, Grid, Paper, Typography } from '@mui/material'
import ManageBBQ from '../../Components/ManageBBQ/ManageBBQ'
import UpcomingBBQ from '../../Components/UpcomingBBQ/UpcomingBBQ'
import MyFriends from '../../Components/MyFriends/MyFriends'
import HeaderWelcome from '../../Components/HeaderWelcome/HeaderWelcome'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import { red } from '@mui/material/colors'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'

function Dashboard() {

  const MENU_TITLE = 'Bienvenido'

  return (
    <div className='container'>
      <Paper
        className="welcom-container"
        sx={{
          backgroundColor: '#6a9848',
          right: 0,
          left: 0,
          textAlign: 'center',
        }}
      >
        <div className="welcom">
          <img src="/src/assets/appsadero_logo-2.png" alt="" />
          <Typography fontSize={'1.em'}>
            {' '}
            <h2>Bienvenida/o {localStorage.getItem('first_name')}</h2>
          </Typography>
        </div>
      </Paper>

      <Grid
        container
        component="main"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ backgroundColor: 'violet',}}
        >

<ManageBBQ />

        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{ backgroundColor: 'red',}}
        >
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ backgroundColor: 'blue', }}
        >
          <MyFriends></MyFriends>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
