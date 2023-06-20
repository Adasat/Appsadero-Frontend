import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './CustomDatePicker.css'

function CustomDatePicker({ hanleCustomDatePicker }) {

  const [time, setTime] = useState('12:00')
  const hanleChange = (time) => {
    setTime(time)
    hanleCustomDatePicker(time)
  }

  return (
    <div className="custom-date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Límite de Pago" onChange={hanleChange} />
      </LocalizationProvider>
    </div>
  )
}

export default CustomDatePicker
