import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffd9b8',
      dark: '#f5a662',
    },
    secondary: {
      main: '#d57a6c',
      dark: '#546a2f',
    },
    background: {
      default: 'white',
    },
    error:{
        main: '#8a0000',
        mate: '#ab4f53'
    }
  },
  typography: {
		fontFamily: [
      'Arial',
      'Helvetica',
      'sans-serif',
    ].join(','),   //Use the 'join' method to transform an Array into a string, with commas separating each element.
		fontSize: 12,
		fontStyle: 'italic'
	}
});

