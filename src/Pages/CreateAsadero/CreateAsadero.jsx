import { useState } from 'react'
import { Box,Dialog,DialogContent,Divider,Grid,List,ListItemButton,ListItemIcon,ListItemText,Paper,Typography } from '@mui/material'
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
import MyFriends from '../../Components/MyFriends/MyFriends'
import SearchFriend from '../../Components/SearchFriend/SearchFriend'

function CreateAsadero() {


  //List of Options to add menu and friends
  const [selectedIndex, setSelectedIndex] = useState()

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    setOpen(true);
    console.log(index)
  }


  //COMPONENT LIST FRIENDS TO SELECT

  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





 //END COMPONENT LIST FRIENDS TO SELECT

  //Handle of customButton
  const handleButton = (button) => {
    /* setButtonProps({...buttonProps, button}) */
    console.log(button)
  }

  //Big Date Picker
  const [date, setDate] = useState()
  const handleDate = (date) => {
    setDate({ ...date, date })
    //const formattedDate = moment(date).format('DD/MM/YYYY');
    //console.log(`DIA SELECCIONADO ${formattedDate}`)
  }

  const [name, setName] = useState('Nombre del Asadero')
  const handleName = (name) => {
    setName(name, name)
    console.log(name)
  }
    const [description, setDescription] = useState('Description')
  const handleDescription = (description) => {
    setDescription(description, description)
    console.log(description)
  }
  const [place, setPlace] = useState('Lugar')
  const handlePlace = (place) => {
    setPlace(place, place)
    console.log(place)
  }
  
 
  return (
    <>
      <Grid
        container
        height="80vh"
      >
        <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <SearchFriend></SearchFriend>
        <MyFriends></MyFriends>
        <Box display={'flex'} justifyContent={'space-between'} m={2}>
        <ButtonCustom handleButton={()=>{handleButton(), handleClose()}}
                  props = {{
                    'text':"Atrás",
                    'navigate': '',
                    'color':"primary",
                  }}></ButtonCustom>
        <ButtonCustom handleButton={()=>{handleButton(), handleClose()}}
                  props = {{
                    'text':"Añadir",
                    'navigate': '',
                    'color':"secondary",
                  }}></ButtonCustom>
      </Box>
        </DialogContent>
        </Dialog>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
        >
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper variant="elevation" elevation={18} sx={{ height: '600px' }}>

              <Calendar handleDate={handleDate} />
              <Divider sx={{ m: 5 }}></Divider>

              <Box sx={{ m: '24px' }}>
                <ButtonCustom
                  handleButton={handleButton}
                  props = {{
                    'text':"Atrás",
                    'navigate':"/dashboard",
                    'color':"primary",
                  }}
                />
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
        >
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
                <TextFieldCustom label={name} onChange={handleName} />
                <TextFieldCustom label= {description} onChange={handleDescription}
                  multiline={true}
                  rows={2}
                />
                <TextFieldCustom label= {place} onChange={handlePlace} />
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
                      className="container-list"
                      component={Paper}
                      variant="elevation"
                      elevation={4}
                    >
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: '100',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <ListItemButton
                          display="flex"
                          alignItems="center"
                          //selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0)}
                        >
                          <ListItemIcon>
                            <PeopleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Invitar Amigos" />
                        </ListItemButton>
                        <ListItemButton
                          display="flex"
                          alignItems="center"
                          //selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1)}
                        >
                          <ListItemIcon>
                            <RestaurantMenuIcon />
                          </ListItemIcon>
                          <ListItemText primary="Elegir Menu" />
                        </ListItemButton>
                      </List>
                      <CustomDatePicker></CustomDatePicker>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  // sx={{ backgroundColor: purple[600]}}
                >
                  <Paper
                    variant="elevation"
                    elevation={4}
                    className="container-timers"
                  >
                    <TimePickerCustom
                      title={'Hora de Inicio'}
                      value={{}}
                    ></TimePickerCustom>
                    <Divider></Divider>
                    <TimePickerCustom
                      title={'Hora de Fin'}
                      value={{}}
                    ></TimePickerCustom>
                  </Paper>
                </Grid>
              </Grid>
              <Divider sx={{ m: 1 }}></Divider>
              <div className="button-next">
                <ButtonCustom
                  handleButton={handleButton}
                  props = {{
                    'text':"Continuar",
                    'navigate':"/dashboard",
                    'color':"secondary",
                  }}
                />
              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateAsadero
