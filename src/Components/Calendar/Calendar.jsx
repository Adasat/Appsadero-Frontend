import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { Box, Paper, Typography } from '@mui/material';
import './Calendar.css'
import dayjs from 'dayjs';

function Calendar({handleDate}){
    
    const [date, setDate] = useState(dayjs('2022-04-15'));
    
    const [dayInfo, setDayInfo] = useState('');

   
    const handleChange = (date) => {
      setDate(date)
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
                defaultValue={date}
                onChange={handleChange}
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
