import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import moment from "moment";
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import Calendar from '../../Components/Calendar/Calendar'
import 'react-day-picker/dist/style.css';
import TextFieldCustom from '../../Components/TextFieldCustom/TextFieldCustom'
import './CreateAsadero.css'
import PeopleIcon from '@mui/icons-material/People'
import TimePickerCustom from '../../Components/TimePickerCustom/TimePickerCustom'
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import { useState } from 'react'
import './DatePicker/DatePicker.css'

//import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';

function CreateAsadero() {
  const [selectedIndex, setSelectedIndex] = useState()

  // eslint-disable-next-line no-unused-vars
  const handleButton = (button) => {
    console.log(button)
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    
  }

  const [date, setDate] = useState()
  
  const handleDate = (date) => {
    
    setDate({...date, date})

    //console.log(date)
    
    //const formattedDate = moment(date).format('DD/MM/YYYY');
    //console.log(`DIA SELECCIONADO ${formattedDate}`)
  }
 

  return (
    <>
      <Grid
        container
        height="80vh"
        sx={
          {
            //backgroundColor: red[500]
          }
        }
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={
            {
              //backgroundColor: blue[500]
            }
          }
        >
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper variant="elevation" elevation={18} sx={{ height: '600px' }}>

              {//ERROR
             <Calendar handleDate={handleDate}/>

              }

   {        /*   
              <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={footer}

                    modifiersClassNames={{
                      head: 'custom-head',
                      selected: 'my-selected',
                      today: 'my-today'
                    }}
                    modifiersStyles={{
                      disabled: { fontSize: '75%' }
                    }}
                  />

*/}



              <Divider sx={{ m: 5 }}></Divider>
              <Box sx={{ m: '24px' }}>
                <ButtonCustom
                  handleButton={(e) => {
                    handleButton(e)
                  }}
                  className="date-picker"
                  text="Atrás"
                  navigate="/login"
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
          sx={
            {
              //backgroundColor: green[500]
            }
          }
        >
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper
              variant="elevation"
              elevation={18}
              sx={{
                //height: '600px',
                padding: 2,
              }}
            >
              <Box sx={{ ml: 0, mr: 0 }}>
                <Typography variant="h6" component="h2">
                  Configura tu Asadero
                </Typography>
                <TextFieldCustom label={'Nombre del Asadero'} />
                <TextFieldCustom
                  multiline={true}
                  rows={2}
                  label={'Descripción'}
                />
                <TextFieldCustom label={'Lugar'} />
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
                        <ListItemButton display="flex" alignItems="center"
                        //selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}>
                          <ListItemIcon>
                            <PeopleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Invitar Amigos" />
                        </ListItemButton>
                        <ListItemButton display="flex" alignItems="center"
                        //selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}>
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
                  text="Continuar"
                  navigate="/dashboard"
                  color="secondary"
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
