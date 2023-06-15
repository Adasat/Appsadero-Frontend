import React from 'react'
import ReactDOM from 'react-dom/client'
import './fonts/roboto'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/index.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CssBaseline, ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider customTheme={customTheme}/>
  </React.StrictMode>,
)