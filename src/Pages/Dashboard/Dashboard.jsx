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
    <div className="container">
      <Paper
        className="welcom-container"
        sx={{
          backgroundColor: '#6a9848',
          right: 0,
          left: 0,
          margin: 2,
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

      <Grid container spacing={4} component="main" sx={{ height: '100vh'}}>
        <Grid item xs={12} sm={6} md={4} sx={{ backgroundColor: '' }}>
          <Paper sx={{m:2, padding:4, display:'flex', justifyContent: 'start', alignContent:'center'}}>
            <Box>

          <Typography variant="h5" component="h2" align='center'>
          ¡Crea un Asadero!
          </Typography>;

          <Typography variant="body">
          ¿Aún no has probado a crear tu propio asadero?<br></br>      
          Te lo ponemos facilito...! 
          <br></br>  
          Haz click aquí en el botón para ir al asistente.
        </Typography>
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center'
        }}>

          <ButtonCustom props={{
            text: 'Nuevo Asadero',
            className:'button-header',
            navigate: '/home/manageAsadero',
            color: 'secondary'
          }}>
          </ButtonCustom>
          </Box>
          </Paper>
          <MyFriends/>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ backgroundColor: '' }}>
          <ManageBBQ />
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{ backgroundColor: '' }}>
          <UpcomingBBQ />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
