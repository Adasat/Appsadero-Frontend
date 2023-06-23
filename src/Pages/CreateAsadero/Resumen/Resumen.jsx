import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
} from '@mui/material'
import { formatDate } from '../../../validations/validations'
import { forwardRef } from 'react'
import { useState } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Resumen({ asadero, nicks, menuResumen }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ver detalles
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
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cerrar
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={5} justifyContent={'center'} margin={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={24} sx={{ borderRadius: '12px' }}>
              <Card sx={{ borderRadius: '12px' }}>
                <CardHeader
                  title="Los datos de tu asadero:"
                  sx={{ textAlign: 'center', backgroundColor: '#e49976' }}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://source.unsplash.com/random?bbq,rotisserie"
                  alt="Grill, barbacue"
                />
                <CardContent>
                  <Typography textAlign={'center'} variant="h4">
                    {asadero.name}
                  </Typography>
                  <Divider sx={{ marginBottom: '10px' }} />
                  <Typography variant="h5">
                    Descripción: {asadero.description}
                  </Typography>
                  <Typography variant="h5">
                  {isNaN(asadero.date_time) ? 'Fecha: ' : 
                    `Fecha: ${formatDate(asadero.date_time)}`}
                  </Typography>
                  <Typography variant="h5">
                  {isNaN(asadero.duration) ? 'Duración:' :` Duración: ${asadero.duration}horas`}
                  </Typography>
                  <Divider sx={{ marginTop: '20px' }} />
                  <Typography>
                    {isNaN(asadero.payments_accepted) ? 'Último día de confirmación: ' : 
                    `Último día de confirmación: ${formatDate(asadero.payments_accepted)}`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={24} sx={{ borderRadius: '12px' }}>
              <Card sx={{ borderRadius: '12px' }}>
                <CardHeader
                  title="Menu"
                  sx={{ textAlign: 'center', backgroundColor: '#e49976' }}
                />
                <List>
                  {menuResumen != undefined &&
                    menuResumen.map((el) => (
                      <Typography variant="h6" key={el.id} textAlign="center">
                        - {el.name}
                      </Typography>
                    ))}
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
                <Divider sx={{ marginBottom: '10px' }} />
                <List>
                  {nicks.length > 0 &&
                    nicks.map((el, id) => (
                      <Typography variant="h6" key={el.id} textAlign="center">
                        {el}
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
