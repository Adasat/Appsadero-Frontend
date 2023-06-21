import { Box, Card, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CardTeam from './CardTeam/CardTeam'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'

function MeetTeam() {
  return (
  <>
    <SubHeader menu='About us'/>
      <Box margin={5} justifyContent={'center'}>


        <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>
          
            <CardTeam />
        
        </Grid>
  
      </Box>
  </>
  )
}

export default MeetTeam
