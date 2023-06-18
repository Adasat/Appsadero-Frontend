import {Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HeaderWelcome from '../../Components/HeaderWelcome/HeaderWelcome'
import Footer from '../../Components/Footer/Footer'


function NotFound() {
  return (
    <>
    <HeaderWelcome title="APPSADERO"/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Paper elevation={3} sx={{ padding: '30px', borderRadius: 10, width: 'auto', margin: '0 auto' }}>
        <Typography variant="h5" sx={{textAlign: 'center'}}>
          Parece que has llegado a nuestra página Not Found.
        </Typography>
        <Typography variant="h5"  sx={{textAlign: 'center'}}>
          No pasa nada. <Link to="/">Click aquí</Link> y te llevamos a la página
          principal.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
        <img src="https://source.unsplash.com/random?bbq" alt="bbq" style={{ margin: '0 auto', borderRadius: '30px' }}/>
        </div>
      </Paper>
      </div>
      <Footer/>
      </>
  )
}

export default NotFound
