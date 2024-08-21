import { createTheme } from '@mui/material/styles';
// import { Geologica } from 'next/font/google';
import localFont from 'next/font/local';

export const fontFamily = localFont({
  // src: [
  //   {
  //     path: '../assets/fonts/poppins/Poppins-Thin.ttf',
  //     style: 'normal',
  //     weight: '200',
  //   },
  //   {
  //     path: '../assets/fonts/poppins/Poppins-Light.ttf',
  //     style: 'normal',
  //     weight: '300',
  //   },
  //   {
  //     path: '../assets/fonts/poppins/Poppins-Regular.ttf',
  //     style: 'normal',
  //     weight: '400',
  //   },
  //   {
  //     path: '../assets/fonts/poppins/Poppins-Medium.ttf',
  //     style: 'normal',
  //     weight: '500',
  //   },
  //   {
  //     path: '../assets/fonts/poppins/Poppins-Bold.ttf',
  //     style: 'normal',
  //     weight: '600',
  //   },
  // ],
  src: [
    {
      path: '../assets/fonts/inter/Inter-Thin.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../assets/fonts/inter/Inter-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/inter/Inter-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/inter/Inter-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/inter/Inter-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../assets/fonts/inter/Inter-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--font-main',
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#191919',
    },
    secondary: {
      main: '#ffffff',
    },
    success: {
      main: '#6421F6'
    }
  },
  typography: {
    fontFamily: fontFamily.style.fontFamily,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            border: '1px solid #191919'
          }
        },
        {
          props: { variant: 'contained', color: 'secondary', disabled: true },
          style: {
            '&.Mui-disabled': {
              backgroundColor: '#E7E7E7',
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: '24px',
            textTransform: 'lowercase'
          }
        },
        {
          props: { variant: 'contained', color: 'inherit' },
          style: {
            backgroundColor: 'var(--unilogy-light-black)',
            color: 'var(--unilogy-text-white)',
          },
        },
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '102.5%',
            zIndex: 1
          }
        }
      ]
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '18px'
        }
      }
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& label.Mui-focused': {
              color: '#191919',
            },
            '& label': {
              color: '#CACACA',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                // borderColor: '#2C55A2',
                borderColor: '',
              },
              '&:hover fieldset': {
                // border: '1px solid #2C55A2',
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                // borderColor: '#2C55A2',
                // border: '2px solid #2C55A2',
                borderColor: '',
                border: 'none',
              },
            },
          }
        }
      ]
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& label.Mui-focused': {
              color: '#CACACA',
            },
            '& .MuiInputBase-input': {
              '& label': {
                color: '#CACACA',
              }
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#191919',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#191919',
              border: '3px solid #191919',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#191919',
              border: '3px solid #191919',
            },
          }
        }
      ]
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#CACACA',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: '#F9F9F9',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          transform: 'none'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            borderColor: '#191919'
          }
        }
      }
    },
    MuiCheckbox: {
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: '#fff',
          }
        }
      ]
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'fit-content',
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#D7D7D7',
          fontSize: '1rem',
          color: '#191919',
          fontWeight: 400
        }
      }
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid var(--unilogy-black)',
            color: '1px solid var(--unilogy-black)'
          }
        }
      ]
    },
  }
});
