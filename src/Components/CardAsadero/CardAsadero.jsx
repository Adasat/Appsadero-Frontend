import {
  Accordion,
  AccordionSummary,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Dialog,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import {
  aceptInvitationFromAsadero,
  getCartFromAsadero,
  getUsersFromAsadero,
  rejectUsersFromAsadero,
  updateAsadero,
} from '../../services/myBBQ.service'
import { forwardRef, useEffect, useState } from 'react'
import { Close, ExpandMore } from '@mui/icons-material'
import AlertSuccess from '../AlertSuccess/AlertSuccess'

function CardAsadero({ bbq, owner }) {
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(true)
  const [reject, setReject] = useState()
  const [currentDay, setCurrentDay] = useState(new Date())
  const [notification, setNotification] = useState(false)
  const [acceptInvitation, setAcceptInvitation] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])

  const [showAlert, setShowAlert] = useState(false)
  const [textAlert, setTextAlert] = useState('')
  const [severityText, setSeverityText] = useState('')

  const navigate = useNavigate()

  const listUsers = async () => {
    const res = await getUsersFromAsadero(bbq.id)
    const cartList = await getCartFromAsadero(bbq.id)
    setUsers(res.users)
    setShoppingCart(cartList)
  }

  useEffect(() => {
    listUsers()
  }, [])

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

  /////////////////////////////////////////////////////////////////////////////////////

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  function FullScreenDialog() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
      location.reload()
    }

    const handleReject = () => {
      setOpen(false)

      setShowAlert(true)
      setTextAlert('Invitación rechazada')
      setTimeout(() => {
        setShowAlert(false)
        location.reload()
      }, 1000)
      
    }
    const handleAccept = async () => {
      setOpen(false)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
        location.reload()
      }, 1000)
      setTextAlert('Invitación aceptada')
      await aceptInvitationFromAsadero(bbq.id)
    }

    const hasPendingInvitation = users.filter(
      (el) =>
        el.status === 'pending' &&
        el.first_name === localStorage.getItem('first_name')
        
    ).length > 0
    
    return (
      <div>
        <Button color='secondary' variant="outlined" onClick={handleClickOpen}>
          Ver más detalles
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {bbq.name}
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={5} justifyContent={'center'} margin={1}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={24} sx={{ borderRadius: '12px' }}>
                <Card sx={{ borderRadius: '12px' }}>
                  <CardHeader
                    title={bbq.name}
                    sx={{ textAlign: 'center', backgroundColor: '#e49976' }}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://source.unsplash.com/random?bbq,rotisserie"
                    alt="Grill, barbacue"
                  />
                  <CardContent>
                    <Typography textAlign={'center'} variant="h4"></Typography>
                    <Divider sx={{ marginBottom: '10px' }} />
                    <Typography variant="h7">
                      Descripción: {bbq.description}
                    </Typography>
                    <Typography variant="h6">
                      Fecha: {formatDate(bbq.date_time)}
                    </Typography>
                    <Typography variant="h6">
                      Hora de inicio: 11:00 horas{' '}
                    </Typography>
                    <Typography variant="h7">
                      Duración: {bbq.duration} horas
                    </Typography>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Typography>
                      Último día de confirmación:{' '}
                      {formatDate(bbq.confirmation_date)}
                    </Typography>
                  </CardContent>
                  {hasPendingInvitation && (
                    <CardActions justifyContent={'center'}>
                      <Button
                        variant="outlined"
                        size="large"
                        color="error"
                        onClick={handleReject}
                        sx={{ height: '60px', width: '150px' }}
                      >
                        Rechazar invitación
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        color="success"
                        onClick={handleAccept}
                        sx={{ height: '60px', width: '150px' }}
                      >
                        Aceptar invitación
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={24} sx={{ borderRadius: '12px' }}>
                <Card sx={{ borderRadius: '12px' }}>
                  <CardHeader
                    title="Menú"
                    sx={{ textAlign: 'center', backgroundColor: '#e49976' }}
                  />

                  <List>
                    {shoppingCart && shoppingCart.length ? (
                      shoppingCart.map((prod) => (
                        <ListItem key={prod.id}>- {prod.name}</ListItem>
                      ))
                    ) : (
                      <Typography variant="body1" align="center">
                        No hay productos en tu lista
                      </Typography>
                    )}
                  </List>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <Paper elevation={24} sx={{ borderRadius: '12px' }}>
                <Card sx={{ borderRadius: '12px' }}>
                  <CardHeader
                    title="Invitados"
                    sx={{ textAlign: 'center', backgroundColor: '#e49976' }}
                  />

                  <List>
                    {owner === true ? users.filter((el) => el.status !== 'rejected').map((el) => ( 
                      <Typography variant="h6" key={el.id} textAlign="center">
                              {el.first_name} - {el.status}
                      </Typography>
                      ))
                    : users.filter((el) => el.status !== 'rejected').map((el) => (
                      <Typography variant="h6" key={el.id} textAlign="center">
                              {el.first_name}
                      </Typography>
                    ))}
                  </List>

                  
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    )
  }
  
  /////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {showAlert && <AlertSuccess text={textAlert} severityText="success" />}
      <Card>
        {users
          .filter(
            (el) =>
              el.status === 'pending' &&
              el.first_name === localStorage.getItem('first_name')
          )
          .map((el) => (
            <Chip key={el.id} label="NEW" color="error" sx={{ m: 1 }}></Chip>
          ))}
        <Link className="links" /* to={`/home/manageAsadero/${bbq.id}`} */>
          <CardHeader
            title={bbq.name}
            sx={{ textAlign: 'center', fontWeight: 'bold' }}
          />
        </Link>
        <Divider sx={{ marginBottom: '10px' }} />
        {FullScreenDialog()}
        <CardContent>
          <Typography variant="body1">{formatDate(bbq.date_time)}</Typography>
          <Typography variant="body1">{bbq.description}</Typography>
          <Typography variant="body1">
            Precio por persona: {bbq.price}
          </Typography>
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
                {open && bbq.isOpen && (
                 <Button color='error' variant="contained" onClick={handleCancel}>Cerrar plazo de pago</Button>
                )}
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default CardAsadero
