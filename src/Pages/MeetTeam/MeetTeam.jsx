import { Box, Card, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CardTeam from './CardTeam/CardTeam'

function MeetTeam() {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Box>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', backgroundColor:'transparent', border: '0px', width: '80vw'}}>
        <Typography variant="h7" padding={'100px'} sx={{margin:'10px 10px', textAlign:'center'}}>Appasadero es una aplicación diseñada para facilitar la organización de barbacoas. Con esta app, los usuarios pueden crear y gestionar eventos de asaderos, incluyendo la selección de ubicación, fecha, duración y menú base. Además, permite invitar a amigos, administrar la lista de invitados y realizar un seguimiento de los pagos. La función destacada de Appasadero es su capacidad para optimizar los recursos alimentarios, evitando el desperdicio y garantizando que nunca falte ni sobre comida. Con una interfaz intuitiva y características prácticas, esta aplicación simplifica la planificación de asaderos y asegura que los eventos sean exitosos y disfrutables para todos los participantes.</Typography>
        </Box>
      </Box>
      <Divider/>

      <Grid container spacing={3}>
        
          <CardTeam />
       
      </Grid>
    </Box>
  )
}

export default MeetTeam
