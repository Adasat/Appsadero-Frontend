import { Button, Card, Divider, Paper, Typography } from '@mui/material'
import ManageBBQ from '../../Components/ManageBBQ/ManageBBQ'
import UpcomingBBQ from '../../Components/UpcomingBBQ/UpcomingBBQ'
import MyFriends from '../../Components/MyFriends/MyFriends'
import { Link } from 'react-router-dom'
import './Dashboard.css'


function Dashboard() {
  return (
    <div className="container">
      <Paper className="welcome-tag" elevation={3} sx={{ borderRadius: 10 }}>
        <img src="../src/assets/appsadero_logo-2.png" alt="logo-appsadero" />
        <h2>Bienvenida {}</h2>
      </Paper>
      <div className="upcomingbbq">
        <UpcomingBBQ />
      </div>
      <Card
        className="createbbq"
        elevation={3}
        sx={{ padding: '30px', borderRadius: 10 }}
      >
        <Typography variant="h5">Crea tu asadero</Typography>
        <Divider sx={{ marginBottom: '10px' }} />
        <Typography variant="body">
          ¿Aún no has probado a crear tu propio asadero?
          <br />
          Te lo ponemos facilito...!
          <br />
          Haz click{' '}
          <Link className="links" to="/createBBQ">
            aquí
          </Link>{' '}
          y podrás personalizar tu asadero.
        </Typography>
        <Button>¡Vamos allá!</Button>
      </Card>
      <div className="myfriends">
        <MyFriends />
      </div>
      <div className="managebbq">
        <ManageBBQ />
      </div>
    </div>
  )
}

export default Dashboard
