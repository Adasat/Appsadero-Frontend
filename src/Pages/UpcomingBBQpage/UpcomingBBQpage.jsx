import { useEffect, useState } from 'react'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'
import { getAllMyAsaderos } from '../../services/myBBQ.service'
import { Card, Grid, Typography } from '@mui/material'
import CardAsadero from '../../Components/CardAsadero/CardAsadero'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

function UpcomingBBQpage() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])
  const menuTitle = 'Estoy invitada/o a...'

  const listUpcomingBBQ = async () => {
    const res = await getAllMyAsaderos()
    setUpcomingBBQ(res)
  }

  console.log(upcomingBBQ)

  useEffect(() => {
    listUpcomingBBQ()
  }, [])

  const showUpComingBBQ = () => {
    if (upcomingBBQ.length > 0) {
      return upcomingBBQ.map((el) => (
        (el.user_asadero.isOwner !== true) &&
        <Grid item xs={12} sm={4} md={3.5} key={el.id}>
          <CardAsadero bbq={el} owner={false}/>
        </Grid>
      ))
    } else {
      <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1">
            Parece que no tienes asaderos venideros...
          </Typography>
          <Typography variant="body1">
            <Link to="/home/createAsadero">
              Crea uno. Decide tú.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Card>
    }
  }

  return (
    <>
      <SubHeader menu={menuTitle} />
      <Grid
      container
      direction="row"
      spacing={3}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100vw', height: '90vh' }}
    >
      <Grid item xs={12}>
        <Box sx={{ overflow: 'auto', maxHeight: '80vh' }}>
          <Grid container spacing={3} justifyContent="center">
            {showUpComingBBQ()}
          </Grid>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default UpcomingBBQpage
