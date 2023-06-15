import React from 'react'
import ReactDOM from 'react-dom/client'
import './fonts/roboto'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router'
import {customTheme} from './Theme/Theme.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={customTheme}> 
         <CssBaseline/>
          <RouterProvider router={router}/>        
       </ThemeProvider> 
  </React.StrictMode>
)