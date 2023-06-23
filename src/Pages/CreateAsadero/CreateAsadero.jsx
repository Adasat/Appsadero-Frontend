import { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
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
import { durationTime } from '../../validations/validations'
import { addGuests, createBBQ } from '../../services/myBBQ.service'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import CategoriesNProducts from '../../Components/CategoriesNProdcut/CategoriesNProducts'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'
import { addProductsToMenu } from '../../services/product.service'
import { useNavigate } from 'react-router-dom'
import Resumen from './Resumen/Resumen'
import CloseIcon from '@mui/icons-material/Close'
import AlertSuccess from '../../Components/AlertSuccess/AlertSuccess'

function CreateAsadero() {
  const navigate = useNavigate()
  const menuTitle = 'Creando Asadero'
  dayjs.extend(customParseFormat)

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [place, setPlace] = useState()
  const [date, setDate] = useState()
  const [guestList, setGuestList] = useState([])
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const [payDate, setPayDate] = useState()
  const [products, setProducts] = useState()
  const [nicksUser, setNicksUser] = useState([])
  const [openFriendPopup, setOpenFriendPopup] = useState(false)
  const [openProductPopup, setOpenProductPopup] = useState(false)

  const openDialog = (event, index) => {
    //setSelectedIndex(index)
    if (index === 0) {
      setOpenFriendPopup(true)
    } else if (index === 1) {
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

  const handleName = (name) => {
    name.length > 0 ? setName(name) : setName()
  }
  const handleDescription = (desc) => {
    desc.length > 0 ? setDescription(desc) : setDescription()
  }
  const handlePlace = (place) => {
    place.length > 0 ? setPlace(place) : setPlace()
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
    // Obtiene el array de objetos de productos existentes del localStorage
    const listaExistente = localStorage.getItem('lista')
    const arrayExistente = listaExistente ? JSON.parse(listaExistente) : []

    let nuevaLista = []
    if (product.length !== 0) {
      // Verifica duplicados por el id antes de agregar nuevos productos
      const nuevosProductos = product.filter((newProduct) => {
        return !arrayExistente.some(
          (existingProduct) => existingProduct.id === newProduct.id
        )
      })

      // Combina los productos existentes con los nuevos y elimina las repeticiones
      nuevaLista = [...arrayExistente, ...nuevosProductos]
      nuevaLista = nuevaLista.map((product) => ({
        ...product,
        checkboxSelection: true,
      }))

      localStorage.removeItem('lista')
      localStorage.setItem('lista', JSON.stringify(nuevaLista))
      setProducts(JSON.parse(localStorage.getItem('lista')))
    }
  }

  const asadero = {
    name: name,
    description: description,
    date_time: dayjs(date, 'DD/MM/YYYY'),
    duration: durationTime(startTime, endTime),
    payments_accepted: dayjs(payDate, 'DD/MM/YYYY'),
    place: place,
  }

  const [showAlert, setShowAlert] = useState(false)
  const [textAlert, setTextAlert] = useState('')
  const [severityText, setSeverityText] = useState()

  const textOk = '¡Has creado con éxito un asadero!'
  const textNotOk = 'Por favor, revisa los campos antes de confirmar.'
  const success = 'success'
  const error = 'error'

  /*
  const alertFunction = () => {
    if (BbqId && guests && menu) {
      setTextAlert(textOk)
     // setShowAlert(true)
      setSeverityText(success)
      const delay = setTimeout(() => {
        navigate('/home/dashboard')
      }, 2000)
      return () => clearTimeout(delay)
    } else {
      setTextAlert(textNotOk)
      setSeverityText(error)
      alert('Por favor, revisa los campos antes de confirmar.')
    }
    setShowAlert(true)
  }
  */

  //Continue Button
  const createAsadero = async () => {
    try {
      const BbqId = await createBBQ(asadero)
      const guests = await addGuests(BbqId.id, guestList)
      const menu = await addProductsToMenu(BbqId.id, products)

      localStorage.removeItem('lista')

      if (menu) {
        setTextAlert(textOk)
        setShowAlert(true)
        setSeverityText(success)
        const delay = setTimeout(() => {
          navigate('/home/dashboard')
        }, 2000)
        return () => clearTimeout(delay)
      }
    } catch (err) {
      console.log(err)
      setShowAlert(true)
      setTextAlert(textNotOk)
      setSeverityText(error)
      throw new Error(err)
    }
  }

  return (
    <>
      <SubHeader menu={menuTitle} />
      {showAlert && (
        <AlertSuccess text={textAlert} severityText={severityText} />
      )}

      <Grid container height="100vh">
        {
          //Popup to choose Friends
        }
        <Dialog open={openFriendPopup} onClose={handleCloseFriends}>
          <DialogContent>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseFriends}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Cerrar
              </Typography>
            </Toolbar>
            <FriendListSelect
              handleFriends={handleFriends}
              handleNickNames={handleNickNames}
            ></FriendListSelect>
            <Divider sx={{ m: 2 }}></Divider>
            <Box display={'flex'} justifyContent={'center'} m={2}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleCloseFriends()
                }}
              >
                Añadir amigos/as
              </Button>
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
              productos={products}
            />
            <Box display={'flex'} justifyContent={'center'} m={2}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleCloseProducts()
                }}
              >
                Añadir productos
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box minHeight={80} maxWidth={600} sx={{ m: 4 }}>
              <Paper elevation={24} sx={{ height: '550px' }}>
                <Calendar handleDate={handleDatePicker} />
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Box minHeight={80} sx={{ m: 4 }}>
              <Paper elevation={24} sx={{ padding: 2 }}>
                <Box sx={{ ml: 0, mr: 0 }}>
                  <Typography variant="h6" component="h2">
                    Configura tu Asadero:
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
                        title={'Hora de inicio'}
                        value={startTime}
                        selectEvent={true}
                        handleStartTimePicker={handleStartTimePicker}
                      ></TimePickerCustom>
                      <Divider></Divider>
                      <TimePickerCustom
                        title={'Hora de fin'}
                        value={endTime}
                        selectEvent={false}
                        handleEndTimePicker={handleEndTimePicker}
                      ></TimePickerCustom>
                    </Paper>
                  </Grid>
                </Grid>
                <Divider sx={{ m: 1 }}></Divider>
                <div className="button-next">
                  <Resumen
                    asadero={asadero}
                    nicks={nicksUser}
                    menuResumen={products}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      createAsadero()
                    }}
                  >
                    Confirmar
                  </Button>
                </div>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateAsadero

// fecha dayjs(date).format('DD/MM/YYYY')
