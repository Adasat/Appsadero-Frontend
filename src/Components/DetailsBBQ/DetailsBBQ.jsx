import { Grid, List, ListItem, Typography } from '@mui/material'
import { useState } from 'react'
import CardAsadero from '../CardAsadero/CardAsadero'
import { getAllMyAsaderos, getUsersFromAsadero } from '../../services/myBBQ.service'
import { beBY } from '@mui/x-date-pickers'

function DetailsBBQ() {
    const[barbacue, setBarbacue] = useState([])
    const[guests, setGuests] = useState([])

    const listBBQ = async() => {
        const res = await getAllMyAsaderos()
        const guest = await getUsersFromAsadero()
        setBarbacue(res)
        setGuests(guest)
    }


  return (
    <Grid container spacing={5} justifyContent={'center'} margin={1}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography textAlign={'center'}>Título</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Typography>{bbq.description}</Typography>
          <Typography>{formatDate(bbq.date_time)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <List>
          <Typography>Menú</Typography>
          <ListItem>Producto 1</ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <List>
          <Typography>Invitados</Typography>
          <ListItem>Invtado 1</ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default DetailsBBQ