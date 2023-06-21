import { Card, Divider, Paper, Typography } from '@mui/material'
import ManageBBQ from '../../Components/ManageBBQ/ManageBBQ'
import UpcomingBBQ from '../../Components/UpcomingBBQ/UpcomingBBQ'
import MyFriends from '../../Components/MyFriends/MyFriends'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'

function Dashboard() {
  return (
    <div className="container">
      <Paper
        className="welcome-tag"
        elevation={3}
        sx={{ borderRadius: 10, textAlign: 'center' }}
      >
        <img src="../src/assets/appsadero_logo-2.png" alt="logo-appsadero" />
        <Link
          to="/home/myProfile"
          className="link"
          style={{ textDecoration: 'none' }}
        >
          <h2>Bienvenida {localStorage.getItem('first_name')}</h2>
        </Link>
      </Paper>
      <div className="managebbq">
        <ManageBBQ/>
      </div>
      <Card
        className="createbbq"
        elevation={3}
        sx={{ padding: '30px', borderRadius: 10 }}
      >
        <Link
          to="/home/createAsadero"
          className="link"
          style={{ textDecoration: 'none' }}
        >
          <Typography variant="h5">Crear un asadero</Typography>
        </Link>
        <Divider sx={{ marginBottom: '10px' }} />
        <Typography variant="body">
          ¿Aún no creado tu asadero?
          <br />
          Te lo ponemos facilito...!
          <br />
          Haz
          <Link to="/home/createAsadero"> click aquí</Link> y podrás
          personalizarlo.
        </Typography>
        <br />
        <ButtonCustom
          props={{ navigate: '/home/createAsadero', text: '¡Vamos allá!' }}
        />
      </Card>
      <div className="myfriends">
        <MyFriends width={'350px'} />
      </div>
      <div className="upcomingbbq">
        <UpcomingBBQ/>
      </div>
    </div>
  )
}

export default Dashboard
