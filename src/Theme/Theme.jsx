import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e49976',
      dark: '#d1967b',
    },
    secondary: {
      main: '#6a9848',  //Button  
      dark: '#546a2f',
    },
    background: {
      default: '#e8e8f1',
    },
    error: {
      main: '#8a0000', //Button cancel/eliminate
      mate: '#ab4f53',
    },
    accent: {
      main: '#e4bad5',
    },
  },
  typography: {
    fontFamily: ['Arial', 'Helvetica', 'sans-serif'].join(','), //Use the 'join' method to transform an Array into a string, with commas separating each element.
    fontSize: 12,
    fontStyle: 'italic',
  },
})

