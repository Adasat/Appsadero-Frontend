import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { formatDate } from '../../validations/validations'



function CardAsadero({ bbq }) {
  return (
    <Card>
      <Link className='links'  to={`/home/manageAsadero/${bbq.id}`}>
        <CardHeader title={bbq.name} sx={{textAlign: 'center', fontWeight: 'bold'}}/>
      </Link>
      <Divider sx={{ marginBottom: '10px' }} />

      <CardContent>
        <Typography variant='body1'>{bbq.description}</Typography>
        <Typography variant='body1'>{formatDate(bbq.date_time)}</Typography>
        <Typography variant='body1'>Precio por persona: {bbq.price}</Typography>
        <Typography>Fecha de confirmación: {formatDate(bbq.confirmation_date)}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardAsadero
