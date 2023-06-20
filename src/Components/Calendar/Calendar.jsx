import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { Box, Paper, Typography } from '@mui/material';
import './Calendar.css'
import dayjs from 'dayjs';
import { formatDate } from '../../validations/validations';
import { format } from 'date-fns';

function Calendar({handleDate}){
    
    const [date, setDate] = useState(dayjs('2022-04-20'))
    const [dateLabel, setDateLabel] = useState()
    
    const handleChange = (date) => {
      setDate(date)
      setDateLabel(dayjs(date).format('YYYY-MM-DD'))
      handleDate(date)
    }

  return (
    <>
      <Typography variant="h6" component="h2" sx={{ padding: 4 }}>
        Selecciona un día:
      </Typography>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Paper variant="elevation" elevation={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={date}
              defaultValue={date}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </Paper>
      </Box>
    </>
  )
}

export default Calendar
