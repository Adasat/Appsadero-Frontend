import {
  Accordion,
  AccordionSummary,
  AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import {
  getUsersFromAsadero,
  rejectUsersFromAsadero,
  updateAsadero,
} from '../../services/myBBQ.service'
import { forwardRef, useEffect, useState } from 'react'
import { Close, ExpandMore } from '@mui/icons-material'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

function CardAsadero({ bbq, owner }) {
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(true)
  const [reject, setReject] = useState()
  const [currentDay, setCurrentDay] = useState(new Date())
  const [notification, setNotification] = useState(false)
  const [shoppingCart, setShoppingCar] = useState([])

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



/////////////////////////////////////////////////////////////////////////////////////

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
/*{(shoppingCart && shoppingCart.length) ? {shoppingCart.map((prod) => <ListItem>{prod.name}</ListItem>)} : 'No hay productos en tu lista'}*/
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          <Grid item xs={12} sm={12} md={12}>
            <Typography textAlign={'center'}>Título</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Typography textAlign={'center'} variant="h4">
                {bbq.name}
              </Typography>
              <Divider sx={{ marginBottom: '10px' }} />

              <Typography variant="h5">
                Descripción: {bbq.description}
              </Typography>
              <Typography variant="h5">
                Fecha: {formatDate(bbq.date_time)}
              </Typography>
              <Typography variant="h5">Duración: {bbq.duration}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" textAlign="center">
              Menú
            </Typography>
            <List></List>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <List>
              <Typography variant="h5" textAlign="center">
                Lista de invitados
              </Typography>
              <Divider sx={{ marginBottom: '10px' }} />

              {users.map((el) => (
                <Typography variant="h6" key={el.id} textAlign="center">
                  {el.first_name}
                </Typography>
              ))}
            </List>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  )
}


/////////////////////////////////////////////////////////////////////////////////////



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

      {users && users !== undefined
        ? users
            .filter((el) => el.status === 'pending' && el.first_name === 'Ciru')
            .map((el) => <Chip key={el.id} label="NEW" color="error"></Chip>)
        : null}
      <Divider sx={{ marginBottom: '10px' }} />
      {FullScreenDialog()}
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
            {users.filter((el) => el.status !== 'rejected').map((el) => (
              <Typography variant="body1" key={el.id}>
                {el.first_name} {(owner === true && el.status !== 'rejected') && `- ${el.status}`}{' '}
                {el.isChef === true && ' -> Chef'}
              </Typography>
            ))}
          </div>
          <Divider sx={{ marginBottom: '10px' }} />
          <Typography variant="body1" textAlign="right" alignContent="center">
            {(() => {
      const userFiltered = users.filter((el) => el.status !== 'rejected');
      return userFiltered.length > 0
        ? userFiltered.length > 1
          ? `${userFiltered.length} personas`
          : `${userFiltered.length} persona`
        : 'No hay invitados aún.';
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
