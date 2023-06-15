import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e49976',
    },
    primary_dark: {
      main: '#d1967d',
    },
    secondary: {
      main: '#6a9848',
    },
    secondary_dark: {
      main: '#546a2f',
    },
    background: {
      default: '#e8e8f1',
    },
    error: {
      main: '#8a0000', //Button cancel/eliminate
    },
    error_mate: {
      main: '#ab4f53',
    },
    accent: {
      main: '#e4bad5',
    },
  },
})