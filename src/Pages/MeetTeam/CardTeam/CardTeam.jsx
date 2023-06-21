import { Image } from '@mui/icons-material'
import { Card, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardTeam() {
    const team = [
        {name: 'Abel', last_name: 'López Pérez', url: 'https://github.com/Grancan91', photo:''},
        {name: 'Diana', last_name: 'Tabraue Rubio', url: 'https://github.com/tabraue', photo:''},
        {name: 'Pedro Adasat', last_name: 'Bonilla Bolaños', url: 'https://github.com/Adasat', photo:''}
    ]
  return (
     team &&
    team.map((el) => (
    <Grid  key={el.name} item xs={3}>
      <Card>
        <CardHeader title={el.name} />
        <CardContent>
          <Typography variant='h6'>{el.last_name}</Typography>
          <CardMedia image={el.photo} />

          <Link to={el.url}>
            <CardMedia image='../../../assets/github.png' heigth='40px' />
          </Link>
        </CardContent>
      </Card>
    </Grid>
    ))
  );
}

export default CardTeam

