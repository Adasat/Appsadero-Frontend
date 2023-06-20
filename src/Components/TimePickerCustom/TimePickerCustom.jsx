import dayjs from 'dayjs';
import React, { useState } from 'react'
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TimePickerCustom.css'
import { Paper, Typography } from '@mui/material';
import { formatDateDB } from '../../validations/validations';

function TimePickerCustom({ handleStartTimePicker, handleEndTimePicker, selectEvent, title, value, onChange }) {
  //const currentTime = dayjs()
  //const today = currentTime.format('DD-MM-YYYY')
  //const [pickerDate, setPickerDate] = useState({dayjs('20022-01-10T15:30')})

  const today = dayjs()
  //console.log(dateTest)
  
  const [time, setTime] = useState(today)
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
            value={value}
            onChange={handleTimeChange}
            ampm={false}
          />
        </LocalizationProvider>
      </div>
    </Paper>
  )
}

export default TimePickerCustom
