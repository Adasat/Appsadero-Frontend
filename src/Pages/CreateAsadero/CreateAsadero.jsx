import { Button, Grid, Paper } from '@mui/material'
import { blue, green, red } from '@mui/material/colors'
import React, { useState } from 'react'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CreateAsadero() {
  
    const navigate = useNavigate()

    const buttonBack = {
        text: 'Atrás',
        action: '/login',
        disabled: false
    }
    
    const handleButton = (button) => {
       
       
        //setButt({ ...butt, text: butt.text }) 
       //setButt({...butt, button})
        //navigate()
    }

  return (
    <>
      <Grid
        container
        component="main"
        height="100vh"
        width="100vw"
        sx={{ backgroundColor: red[500] }}
      >
        <Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: blue[500] }}>
          <Paper>
            <h1>Elige un día</h1>

            <ButtonCustom
              handleButton={handleButton}
              action={buttonBack.action}
              disabled={buttonBack.disabled}
              text={buttonBack.text}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ backgroundColor: green[500] }}
        ></Grid>
      </Grid>
    </>
  )
}

export default CreateAsadero