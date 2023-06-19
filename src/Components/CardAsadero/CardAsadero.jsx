import {
  Accordion,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import { getUsersFromAsadero } from '../../services/myBBQ.service'
import { useEffect, useState } from 'react'
import { ExpandMore } from '@mui/icons-material'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function CardAsadero({ bbq, owner }) {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const listUsers = async () => {
    const res = await getUsersFromAsadero(bbq.id)
    setUsers(res.users)
  }

  useEffect(() => {
    listUsers()
  }, [])

  const handleButton = () => {
    navigate('/home/createAsadero')
  }

  return (
    <Card>
      <Link className="links" to={`/home/manageAsadero/${bbq.id}`}>
        <CardHeader
          title={bbq.name}
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        />
      </Link>
      <Divider sx={{ marginBottom: '10px' }} />
      <CardContent>
        <Typography variant="body1">{formatDate(bbq.date_time)}</Typography>
        <Typography variant="body1">{bbq.description}</Typography>
        <Typography variant="body1">Precio por persona: {bbq.price}</Typography>
        <Typography>
          Fecha de confirmación: {formatDate(bbq.confirmation_date)}
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="body">Invitados</Typography>
          </AccordionSummary>
          <div>
            {users.map((el) => (
              <Typography variant="body1" key={el.id}>
                {el.first_name} {owner === true && `- ${el.status}`}{' '}
                {el.isChef === true && ' -> Chef'}
              </Typography>
            ))}
          </div>
          <Divider sx={{ marginBottom: '10px' }} />
          <Typography variant="body1" textAlign="right" alignContent="center">
            {users.length > 0 ?( users.length > 1 ? `${users.length} personas` : `${users.length} persona`) : 'No hay invitados aún.'} 
          </Typography>
        </Accordion>

        {owner === true && (
          <Grid container justifyContent="flex-end">
            <Grid item>
              <ButtonCustom
                props={{ navigate: '/home/createAsadero', text: 'Editar' }}
                handleButton={handleButton}
              />
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  )
}

export default CardAsadero
