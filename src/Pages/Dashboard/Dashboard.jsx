import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import ManageBBQ from '../../Components/ManageBBQ/ManageBBQ'
import UpcomingBBQ from '../../Components/UpcomingBBQ/UpcomingBBQ'
import MyFriends from '../../Components/MyFriends/MyFriends'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <Paper
        elevation={3}
        className="welcom-container"
        sx={{
          backgroundColor: '#6a9848',
          right: 0,
          left: 0,
          margin: 2,
          textAlign: 'center',
          borderRadius: 4,
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

      <Grid container spacing={4} component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={12} md={4} sx={{ backgroundColor: '' }}>
          <Paper elevation={24} sx={{ m: 2, padding: 4, textAlign: 'center', borderRadius: 4 }}>


            <Grid container>
              <Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: '' }}>
                <Box
                  sx={{
                    padding: '8px',
                  }}
                >
                  <Typography variant="h5" component="h2" align="center">
                    ¡Crea un Asadero!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: '' }}>
                <Box
                  sx={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'start',
                    padding: '2px',
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/home/createAsadero')
                    }}
                  >
                    Nuevo Asadero
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography variant="subtitle" align="justify" sx={{ m: 3 }}>
                ¿Aún no has probado a crear tu propio asadero?<br></br>Te lo
                ponemos facilito...!<br></br>Haz click en el botón para ir al
                asistente.
              </Typography>
            </Box>
          </Paper>
          <MyFriends />
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{ backgroundColor: '' }}>
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
