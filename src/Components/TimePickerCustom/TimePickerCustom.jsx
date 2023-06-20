import dayjs from 'dayjs';
import React, { useState } from 'react'
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TimePickerCustom.css'
import { Paper, Typography } from '@mui/material';
import { formatDateDB } from '../../validations/validations';

function TimePickerCustom({ handleStartTimePicker, handleEndTimePicker, selectEvent, title, value, onChange }) {

  
const today = new Date()
//const defaultTime = dayjs(today).format('HH:mm')

  const [time, setTime] = useState()
  
  const handleTimeChange = (time) => {
    setTime(time)    
    selectEvent ? handleStartTimePicker(time) : handleEndTimePicker(time)
  }

  return (
    <Paper className="paper-pick">
      <div className="container-pick">
        <Typography variant="button" sx={{ paddingTop: 2 }}>
          {title}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            className="time-picker"
            defaultValue={time}
            onChange={handleTimeChange}
            ampm={false}
          />
        </LocalizationProvider>
      </div>
    </Paper>
  )
}

export default TimePickerCustom
