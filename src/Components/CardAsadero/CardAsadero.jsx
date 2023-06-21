import {
  Accordion,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import {
  getUsersFromAsadero,
  rejectUsersFromAsadero,
  updateAsadero,
} from '../../services/myBBQ.service'
import { useEffect, useState } from 'react'
import { ExpandMore } from '@mui/icons-material'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function CardAsadero({ bbq, owner }) {
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(true)
  const [reject, setReject] = useState()
  const [currentDay, setCurrentDay] = useState(new Date())
  const [notification, setNotification] = useState(false)

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

  // close payment button
  const rejected = async () => {
    const res = await rejectUsersFromAsadero(bbq.id)
    await updateAsadero(bbq.id, false)
    setReject(res)
  }

  const handleCancel = () => {
    setOpen(false)
    rejected()
  }

  const openVSclosed = (date) => {
    const formattedDate = formatDate(date)
    const currentDate = formatDate(new Date())
    setCurrentDay(currentDate)
    if (formattedDate >= currentDate || open === true) {
      return true
    } else {
      handleCancel()
    }
  }

  useEffect(() => {
    openVSclosed(bbq.confirmation_date)
  }, [currentDay, rejected])

  // ESTA FUNCIÓN TE TIENE QUE LLEVAR A PODER VER LOS DATOS DE ESE ASADERO
  // SIENDO INVITADO TENDRÁS QUE PODER ENVIAR EL PAGO, ASÍ COMO VER ESOS DATOS. SOLO VISUALIZAR
  const handleNew = () => {
    alert('e') // COMPROBCIÓN DE QUE FUNCIONA ESTE ON CLICK
    //navigate(`/home/view/${bbq.id}`)
  }


  return (
    <Card>
      {users
        .filter(
          (el) =>
            el.status === 'pending' &&
            el.first_name === localStorage.getItem('first_name')
        )
        .map((el) => (
          <Chip key={el.id} label="NEW" color="error" sx={{ m: 1 }} onClick={handleNew}></Chip>
        ))}
      <Link className="links" /* to={`/home/manageAsadero/${bbq.id}`} */>
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
            {users
              .filter((el) => el.status !== 'rejected')
              .map((el) => (
                <Typography variant="body1" key={el.id}>
                  {el.first_name}{' '}
                  {owner === true &&
                    el.status !== 'rejected' &&
                    `- ${el.status}`}{' '}
                  {el.isChef === true && ' -> Chef'}
                </Typography>
              ))}
          </div>
          <Divider sx={{ marginBottom: '10px' }} />
          <Typography variant="body1" textAlign="right" alignContent="center">
            {(() => {
              const userFiltered = users.filter(
                (el) => el.status !== 'rejected'
              )
              return userFiltered.length > 0
                ? userFiltered.length > 1
                  ? `${userFiltered.length} personas`
                  : `${userFiltered.length} persona`
                : 'No hay invitados aún.'
            })()}
          </Typography>
        </Accordion>
        {owner === true && (
          <Grid container justifyContent="flex-end">
            <Grid item>
              <ButtonCustom
                props={{
                  navigate: '/home/createAsadero',
                  text: 'Ver detalles',
                }}
                handleButton={handleButton}
              />
              {open && bbq.isOpen && (
                <ButtonCustom
                  props={{
                    text: 'Cerrar plazo de pago',
                    color: 'error',
                  }}
                  handleButton={handleCancel}
                />
              )}
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  )
}

export default CardAsadero
