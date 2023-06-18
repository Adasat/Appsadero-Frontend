import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './CustomDatePicker.css'

function CustomDatePicker() {
  return (
    <div className='custom-date-picker'>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Límite de Pago" />
    </LocalizationProvider>
    </div>
  )
}

export default CustomDatePicker
