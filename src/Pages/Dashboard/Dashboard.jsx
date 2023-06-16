import { Box, Grid, Paper, Typography } from '@mui/material'
import AsaderosIOwn from '../../Components/AsaderosIOwn/AsaderosIOwn'
import UpcomingBBQ from '../../Components/UpcomingBBQ/UpcomingBBQ'
import MyFriends from '../../Components/MyFriends/MyFriends'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
          >
            <img
              src="../src/assets/appsadero_logo-2.png"
              alt="Icono personalizado"
              style={{ width: 200 }}
            />

            <Typography
              variant="h6"
              style={{ alignSelf: 'center', textAlign: 'center' }}
            >
              Bienvenida
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '32px',
        }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: '#e8e8f1',
            padding: 20,
            width: 500,
            height: 130,
          }}
        >
          <Grid container alignItems="center">
            <Grid item>
              <img
                src="../src/assets/appsadero_logo-2.png"
                alt="logo-appsadero"
                style={{
                  width: 150,
                  marginTop: -30,
                  marginBottom: -35,
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6" style={{ marginLeft: 60 }}>
                Bienvenida
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <UpcomingBBQ />
      <AsaderosIOwn />
      <MyFriends />
    </>
  )
}

export default Dashboard

/*
    <Grid container spacing={2}>
      <Grid item xs={6} sm={4} md={3}>
        
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          
        </Grid>
      </Grid>


*/
