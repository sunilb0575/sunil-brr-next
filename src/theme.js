'use client'
import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#234F72',
      light: '#335080',
      dark: '#003366',
      contrastText: '#F2F8FF', // White
    },
    secondary: {
      main: '#E6F2FF',
      light:  '#EBF7FB', //'#42a4c51a',
      dark: '#006699',
      contrastText: '#1B1F33', // Black
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
      disabled: '#E2E2E3',
    },
  },
  components: {
    // Name of the component
    MuiAppBar: {
      defaultProps: {
        // The props to change the default for.
        color: 'white',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {  fontWeight: 900 },
    caption: {
      fontSize: 11.2,
      letterSpacing: 0.5,
      lineHeight: 1.5,
    }
  },
  shape: {
    borderRadius: 0,
    smallRadius: 5,  // Custom small radius
    mediumRadius: 10, // Custom medium radius
    largeRadius: 20,  // Custom large radius
  },
})

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    cream: theme.palette.augmentColor({
      color: {
        main: '#FEFBF4',
      },
      name: 'cream',
    }),
    white: theme.palette.augmentColor({
      color: {
        main: '#ffffff',
        light: '#fafbfd',
      },
      name: 'white'
    })
  },
})


theme = responsiveFontSizes(theme)

export default theme
