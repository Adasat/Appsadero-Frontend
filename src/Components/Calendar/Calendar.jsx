import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, DatePicker, StaticDatePicker } from '@mui/x-date-pickers';
import { Box, Divider, Paper, Typography } from '@mui/material';
import './Calendar.css'

function Calendar({handleDate}){
    
    const [date, setDate] = useState();
    const [dayInfo, setDayInfo] = useState('');

   
    const handleChange = (date) => {
      
      
      console.log(date)

      setDate({...date, date})
      //setDayInfo({...dayInfo, date})
      handleDate(date)
      console.log(date)
      
    }

  return (
    <>
          <Typography variant="h6" component="h2" sx={{padding:4}}>
                Selecciona un día:
              </Typography>
    <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        >
        <Paper variant="elevation" elevation={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar  
                value={date} onChange={handleChange} 
                />
        </LocalizationProvider>
         <Typography variant="Subtitle" sx={{padding:4}}>
                {dayInfo}
              </Typography>
        </Paper>
    </Box>
  </>
  )
}

export default Calendar
