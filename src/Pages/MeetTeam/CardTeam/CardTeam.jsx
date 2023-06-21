import { Height, Image } from '@mui/icons-material'
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AbelImage from '../../../assets/Abel.png';
import DianaImage from '../../../assets/Diana.png';
import AdasatImage from '../../../assets/Adasat.png';
import GithubIcon from '../../../assets/github.png'

function CardTeam() {


    const team = [
        {name: 'Abel', last_name: 'López Pérez', url: 'https://github.com/Grancan91', photo:AbelImage},
        {name: 'Diana', last_name: 'Tabraue Rubio', url: 'https://github.com/tabraue', photo:DianaImage},
        {name: 'Pedro Adasat', last_name: 'Bonilla Bolaños', url: 'https://github.com/Adasat', photo:AdasatImage}
    ]
  return (
     team &&
    team.map((el) => (
    <Grid  key={el.name} item xs={10} sm={6} md={4} lg={3}>
      <Card sx={{ border: '2px dotted black', borderRadius: '20px', textAlign:'center', boxShadow:'5px 5px grey', alignItems:'center'}}>
        <CardHeader title={el.name} />
        <CardContent>
          <Typography variant='h6' sx={{marginBottom:'10px'}}>{el.last_name}</Typography>
          
            <CardMedia component="img" src={el.photo} sx={{borderRadius:'12px', height:'300px'}}/>
              <Link to={el.url}>
                <CardMedia component="img" src={GithubIcon} sx={{width:'15%', margin:'10px', display: 'flex', justifyContent: 'center' }}/>
              </Link>
        </CardContent>
      </Card>
    </Grid>
    ))
  );
}

export default CardTeam

