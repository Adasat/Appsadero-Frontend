import dayjs from 'dayjs';
import React, { useState } from 'react'
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TimePickerCustom.css'
import { Paper, Typography } from '@mui/material';

function TimePickerCustom({title, value, onChange}) {
  
  //const currentTime = dayjs()
  //const today = currentTime.format('DD-MM-YYYY')
  const today = dayjs()

    const[time, setTime] = useState(today)    
    const handleTimeChange = (time) => {
        setTime(time);
      };
    

  return (
    <Paper className='time-pick'>
      <Typography variant="button" sx={{paddingTop:2}}>{title}</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TimePicker
          value={time}
          onChange={onChange}
          ampm={false}
          
        />
    </LocalizationProvider>
    </Paper>
  )
}

export default TimePickerCustom
