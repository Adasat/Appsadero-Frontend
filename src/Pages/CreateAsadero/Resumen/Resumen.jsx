import * as React from 'react'
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
import { Grid, Paper } from '@mui/material'
import { formatDate } from '../../../validations/validations'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Resumen(asadero, nicks, menuResumen) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  console.log(asadero)

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
          <Grid item xs={12} sm={12} md={12}>
            <Typography textAlign={'center'}>Título</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Typography textAlign={'center'} variant="h4">
                {asadero.asadero.name}
              </Typography>
              <Divider sx={{ marginBottom: '10px' }} />

              <Typography variant="h5">
                Descripción: {asadero.asadero.description}
              </Typography>
              <Typography variant="h5">
                Fecha: {formatDate(asadero.asadero.date_time)}
              </Typography>
              <Typography variant="h5">
                Duración: {asadero.asadero.duration}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" textAlign="center">
              Menú
            </Typography>
            <List>
            {asadero.menuResumen != undefined &&
                asadero.menuResumen.map((el, idx) => (
                  <Typography variant="h6" key={el.idx} textAlign="center">
                    {el.name}
                  </Typography>
                ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <List>
              <Typography variant="h5" textAlign="center">
                Lista de invitados
              </Typography>
              <Divider sx={{ marginBottom: '10px' }} />

              {asadero.nicks.length > 0 &&
                asadero.nicks.map((el, idx) => (
                  <Typography variant="h6" key={el.idx} textAlign="center">
                    {el}
                  </Typography>
                ))}


            </List>
          </Grid>
        </Grid>

        <List>



          <Divider />
        </List>
      </Dialog>
    </div>
  )
}
