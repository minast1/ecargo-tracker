import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#556cd6',
    },
    error: {
      main: red.A400,
    },
    success: {
      main : '#b71c1c'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontSize: '12px',
          fontWeight: 700,
          color: 'white',
          textTransform: 'capitalize'
        },
        contained: {
          fontSize: 12,
          borderRadius: 0,
         
        },
        root: {
          "&.Mui-disabled": {
            "backgroundColor": "#c62828",
            "color": "white"
          }

        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
           borderBottom: '1px solid white',
    '&:after': {
      // The MUI source seems to use this but it doesn't work
      borderBottom: '1px solid white',
    },
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 11,
          fontWeight: 700
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '2.1px'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        sizeSmall: {
          borderBottom: 'none',
          fontSize: 10,
          color: 'gray',
          
        },
        root: {
          borderBottomColor: 'gray',
          fontSize: 13,
          paddingBottom: 2,
          textTransform: 'uppercase'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        standard: {
          "&.Mui-focused": {
               color: 'white'
             }
        },
        shrink: {
          fontSize: 19,
          fontWeight: 'bold'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: 'green'
        }
      }
    },
   
    
  }
});

export default theme;
