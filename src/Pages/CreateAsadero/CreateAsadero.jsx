import { useState } from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Slide,
  Toolbar,
  Typography,
  useStepContext,
} from '@mui/material'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import Calendar from '../../Components/Calendar/Calendar'
import 'react-day-picker/dist/style.css'
import TextFieldCustom from '../../Components/TextFieldCustom/TextFieldCustom'
import './CreateAsadero.css'
import PeopleIcon from '@mui/icons-material/People'
import TimePickerCustom from '../../Components/TimePickerCustom/TimePickerCustom'
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import './DatePicker/DatePicker.css'
import FriendListSelect from '../../Components/FriendListSelect/FriendListSelect'
import { formatDateDB, formatTime } from '../../validations/validations'
import { addGuests, createBBQ } from '../../services/myBBQ.service'
import dayjs from 'dayjs'
import CategoriesNProducts from '../../Components/CategoriesNProdcut/CategoriesNProducts'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'
import { addProductsToMenu } from '../../services/product.service'
import { useNavigate } from 'react-router-dom'

import Resumen from './Resumen/Resumen'
import CloseIcon from '@mui/icons-material/Close'

function CreateAsadero() {
  const navigate = useNavigate()
  const menuTitle = 'Creando Asadero'

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [place, setPlace] = useState('')
  const [date, setDate] = useState()
  const [guestList, setGuestList] = useState([])
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const [payDate, setPayDate] = useState()
  const [products, setProducts] = useState()
  const [nicksUser, setNicksUser] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [nickname, setNickname] = useState()
  const [openFriendPopup, setOpenFriendPopup] = useState(false)
  const [openProductPopup, setOpenProductPopup] = useState(false)

  const openDialog = (event, index) => {
    //setSelectedIndex(index)
    if (index === 0) {
      setOpenFriendPopup(true)
    }

    if (index === 1) {
      setOpenProductPopup(true)
    }
  }

  const handleCloseFriends = () => {
    setOpenFriendPopup(false)
  }

  const handleCloseProducts = () => {
    setOpenProductPopup(false)
  }
  // eslint-disable-next-line no-unused-vars
  const handleButton = (button) => {}

  const handleSearchInput = (value) => {
    setNickname(value)
  }

  const handleSearchClick = (value) => {
    setNickname(value)
  }

  const handleName = (name) => {
    setName(name)
  }
  const handleDescription = (desc) => {
    setDescription(desc)
  }
  const handlePlace = (place) => {
    setPlace(place)
  }
  const handleDatePicker = (date) => {
    setDate(date)
  }
  const hanleCustomDatePicker = (payDate) => {
    setPayDate(payDate)
  }
  const handleStartTimePicker = (startTime) => {
    setStartTime(startTime)
  }
  const handleEndTimePicker = (endTime) => {
    setEndTime(endTime)
  }
  const handleFriends = (guests) => {
    setGuestList([...guestList, guests])
  }

  const handleNickNames = (nick) => {
    setNicksUser([...nicksUser, nick])
  }



  const handleProductSelection = (product) => {
    //Gets Array of Products OBJ
    setProducts(product)
  }

  const asadero = {
    name: name,
    description: description,
    date_time: dayjs(date).format('YYYY-MM-DD'),
    duration: formatTime(startTime),
    payments_accepted: formatDateDB(payDate),
    place: place,
  }

  //Continue Button
  const createAsadero = async () => {
    //console.log(guestList)
    try {
      const BbqId = await createBBQ(asadero)

      console.log('Asadero Creado')

      const guests = BbqId
        ? await addGuests(BbqId.id, guestList)
        : console.log('Not guest invited')

      console.log('Invitaciones Enviadas')
      //console.log(BbqId.id, products)
      const menu = await addProductsToMenu(BbqId.id, products)

      menu ? console.log('Menú Añadido') : console.log('paquete')

      //Añadir
      navigate('/home/dashboard')
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }

  return (
    <>
      <SubHeader menu={menuTitle} />
      <Grid container height="100vh">
        {
          //Popup to choose Friends
        }
        <Dialog open={openFriendPopup} onClose={handleCloseFriends}>
          <DialogContent>
            <FriendListSelect
              handleFriends={handleFriends}
              handleNickNames={handleNickNames}
            ></FriendListSelect>
            <Divider sx={{ m: 2 }}></Divider>
            <Box display={'flex'} justifyContent={'center'} m={2}>
              <ButtonCustom
                handleButton={() => {
                  handleButton(), handleCloseFriends()
                }}
                props={{
                  text: 'Aceptar',
                  navigate: '',
                  color: 'secondary',
                }}
              ></ButtonCustom>
            </Box>
          </DialogContent>
        </Dialog>

        {
          //Popup to choose Menu
        }
        <Dialog
          open={openProductPopup}
          onClose={handleCloseProducts}
          className="dialog"
          fullScreen={true}
          scroll="paper"
          sx={{ backgroundColor: 'transparent' }}
        >
          <DialogContent>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseProducts}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Cerrar
              </Typography>
            </Toolbar>

            <CategoriesNProducts
              handleProducts={handleProductSelection}
             
            />
            <Box display={'flex'} justifyContent={'center'} m={2}>
              <ButtonCustom
                handleButton={() => {
                  handleButton(), handleCloseProducts()
                }}
                props={{
                  text: 'Añadir Productos',
                  navigate: '',
                  color: 'secondary',
                }}
              ></ButtonCustom>
            </Box>
          </DialogContent>
        </Dialog>

        <Grid item xs={12} sm={6} md={6}>
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper variant="elevation" elevation={18} sx={{ height: '600px' }}>
              <Calendar handleDate={handleDatePicker} />
              <Divider sx={{ m: 5 }}></Divider>
              <Box sx={{ m: '24px' }}></Box>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper
              variant="elevation"
              elevation={18}
              sx={{
                padding: 2,
              }}
            >
              <Box sx={{ ml: 0, mr: 0 }}>
                <Typography variant="h6" component="h2">
                  Configura tu Asadero
                </Typography>
                <TextFieldCustom
                  label="Título de tu asadero"
                  onChange={handleName}
                />
                <TextFieldCustom
                  label="Descripción"
                  onChange={handleDescription}
                  multiline={true}
                  rows={2}
                />
                <TextFieldCustom label="Lugar" onChange={handlePlace} />
              </Box>

              <Grid container sx={{}}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  // sx={{ backgroundColor: blue[600] }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignContent={'center'}
                  >
                    <Box
                      justifyContent={'center'}
                      className="container-list"
                      component={Paper}
                      variant="elevation"
                      elevation={4}
                    >
                      <List
                        sx={{
                          marginTop: '5px',
                          width: '90%',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <ListItemButton
                          alignItems="center"
                          sx={{ width: '100%' }}
                          //selected={selectedIndex === 0}
                          onClick={(event) => openDialog(event, 0)}
                        >
                          <ListItemIcon>
                            <PeopleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Invitar Amigos" />
                        </ListItemButton>
                        <ListItemButton
                          //selected={selectedIndex === 1}
                          onClick={(event) => openDialog(event, 1)}
                        >
                          <ListItemIcon>
                            <RestaurantMenuIcon />
                          </ListItemIcon>
                          <ListItemText primary="Elegir Menu" />
                        </ListItemButton>
                      </List>
                      <CustomDatePicker
                        hanleCustomDatePicker={hanleCustomDatePicker}
                      ></CustomDatePicker>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  // sx={{ backgroundColor: purple[600]}}
                >
                  <Paper
                    sx={{ marginRight: 1 }}
                    variant="elevation"
                    elevation={4}
                    className="container-timers"
                  >
                    <TimePickerCustom
                      title={'Hora de Inicio'}
                      value={startTime}
                      selectEvent={true}
                      handleStartTimePicker={handleStartTimePicker}
                    ></TimePickerCustom>
                    <Divider></Divider>
                    <TimePickerCustom
                      title={'Hora de Fin'}
                      value={endTime}
                      selectEvent={false}
                      handleEndTimePicker={handleEndTimePicker}
                    ></TimePickerCustom>
                  </Paper>
                </Grid>
              </Grid>
              <Divider sx={{ m: 1 }}></Divider>
              <div className="button-next">
                <ButtonCustom
                  handleButton={() => {
                    createAsadero()
                  }}
                  props={{
                    text: 'Confirmar',
                    navigate: '',
                    color: 'secondary',
                  }}
                />
              </div>
              <Resumen
                asadero={asadero}
                nicks={nicksUser}
                menuResumen={products}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateAsadero

// fecha dayjs(date).format('DD/MM/YYYY')
