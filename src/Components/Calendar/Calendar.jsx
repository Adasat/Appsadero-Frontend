import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, DatePicker, StaticDatePicker } from '@mui/x-date-pickers';
import { Box, Divider, Paper, Typography } from '@mui/material';
import './Calendar.css'

function Calendar(){
    const[date, setDate] = useState(undefined)
    
    const handleDateChange = (date) => {
        setDate(date);
      };

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
                size='small'              
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <input {...params}/>}
                />
        </LocalizationProvider>
         <Typography variant="subtitle1" component="subtitle" sx={{padding:4}}>
                No has seleccionado ningún día.
              </Typography>
        </Paper>
    </Box>
  </>
  )
}

export default Calendar
