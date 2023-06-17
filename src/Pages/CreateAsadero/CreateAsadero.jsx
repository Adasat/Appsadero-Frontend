import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { blue, green, purple, red } from '@mui/material/colors'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import Calendar from '../../Components/Calendar/Calendar'
import TextFieldCustom from '../../Components/TextFieldCustom/TextFieldCustom'
import './CreateAsadero.css'
import PeopleIcon from '@mui/icons-material/People'
import TimePickerCustom from '../../Components/TimePickerCustom/TimePickerCustom'

//import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';

function CreateAsadero() {
  const handleButton = (button) => {}

  return (
    <>
      <Grid container height="80vh" sx={{ 
        //backgroundColor: red[500] 
        }}>
        <Grid item xs={12} sm={6} md={6} sx={{ 
          //backgroundColor: blue[500]
           }}>
          <Box minHeight={80} sx={{ m: 4 }}>
            <Paper variant='elevation' elevation={18} sx={{ height: '600px' }}>
              <Calendar />
              <Divider sx={{ m: 5 }}></Divider>
              <Box sx={{ m: '24px' }}>
                <ButtonCustom
                  handleButton={handleButton}
                  className="date-picker"
                  text="Atrás"
                  navigate="/login"
                />
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{
           //backgroundColor: green[500] 
           }}>
        <Box minHeight={80} sx={{ m:4 }}>
            <Paper variant='elevation' elevation={18}sx={{ 
              //height: '600px',
               padding:2}}>
              <Box sx={{ ml: 0, mr:0}}>
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

              <Grid container
              sx={{justifyContent:'end'}}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                 // sx={{ backgroundColor: blue[600] }}
                >
                  <Box display={'flex'} justifyContent={'center'} alignContent={'center'}
                  >
                    <Box className='container-buttons' component={Paper} height={210} variant='elevation' elevation={4}>
                    <div className='icon-buttons'>
                      <PeopleIcon />
                      <ButtonCustom
                        handleButton={handleButton}
                        text="Invitar Amigos"
                        navigate="/amigos"
                        />
                        </div>
                        <div className='icon-buttons'>

                      <PeopleIcon />
                      <ButtonCustom
                        handleButton={handleButton}
                        text="Elegir Menú"
                        navigate="/menu"
                        />
                      </div>
                      <div className='icon-buttons'>
                      <PeopleIcon />
                      <ButtonCustom
                        handleButton={handleButton}
                        text="Fecha Límite"
                        navigate="/amigos"
                        />
                        </div>
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
                  <Paper  variant='elevation' elevation={4} className='container-timers'>

                      <TimePickerCustom title={'Hora de Inicio'} value={{}}></TimePickerCustom>
                      <Divider></Divider>
                      <TimePickerCustom title={'Hora de Inicio'} value={{}}></TimePickerCustom>

                  </Paper>
                </Grid>
              </Grid>
                <Divider></Divider>
                  <div className='button-next'>
                  <ButtonCustom
                    handleButton={handleButton}
                    text="Continuar"
                    navigate="/dashboard"
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
