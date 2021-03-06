import { createTheme } from '@mui/material/styles';

import ThemeColors from 'shared/styles/theme';

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.secondColor,
      dark: ThemeColors.black,
    },

    secondary: {
      main: ThemeColors.secondColor,
    },

    text: {
      primary: ThemeColors.white,
    },
  },

  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          height: '100%',
          width: '100%',
        },
      },

      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: ThemeColors.dark,
            borderRadius: 5,
          },
        },
        {
          props: { variant: 'standard' },
          style: {
            backgroundColor: 'transparent',
          },
        },
      ],
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
          transition: 'all 0.2s linear',

          '&:hover': {
            '&::before': {
              borderBottom: `1px solid ${ThemeColors.white} !important`,
            },
          },
          '&::before': {
            color: ThemeColors.white,
            borderColor: ThemeColors.white,
          },
          '&::after': {
            borderBottom: `1px solid ${ThemeColors.secondColor}`,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
          height: '100%',
          backgroundColor: ThemeColors.dark,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: ThemeColors.secondColor,
          },
        },
        notchedOutline: {
          transition: 'all 0.2s linear',
          borderColor: ThemeColors.borderColor,
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSelect-icon': {
            fill: ThemeColors.white,
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: ThemeColors.dark,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: `${ThemeColors.dark} !important`,
          border: `1px solid ${ThemeColors.secondColor} `,
          '& .MuiCalendarPicker-root': {
            marginTop: 10,
          },

          '& .MuiTypography-root': {
            color: ThemeColors.white,
          },

          '& .PrivatePickersYear-yearButton.Mui-selected': {
            backgroundColor: `${ThemeColors.secondColor} !important`,
          },

          '&.Mui-selected:hover, &.Mui-selected:hover': {
            backgroundColor: `${ThemeColors.secondColor} !important`,
          },

          '& .MuiSvgIcon-root': {
            fill: ThemeColors.white,
          },

          '& .MuiPickersDay-today': {
            border: `1px solid ${ThemeColors.secondColor} !important`,
          },

          '& .MuiPickersDay-root': {
            backgroundColor: 'transparent',

            '&:focus.Mui-selected': {
              backgroundColor: ThemeColors.secondColor,
            },

            '&.Mui-selected': {
              '&:hover': {
                backgroundColor: ThemeColors.secondColor,
              },
            },
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          color: '#8e8e8e',
          boxShadow: 'none',
          border: 'none',
          '::before': {
            backgroundColor: 'transparent',
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
          '&.Mui-selected': {
            color: ThemeColors.secondColor,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        colorPrimary: {
          width: '100%',
          height: 3,
          padding: 0,
          display: 'block',
          color: ThemeColors.secondColor,
          '&:hover .MuiSlider-thumb': {
            width: 15,
            height: 15,
          },
        },

        rail: {
          backgroundColor: 'transparent',
          height: 3,
        },

        track: {
          border: 'none',
        },

        thumb: {
          borderRadius: '50%',
          height: 0,
          width: 0,
          transition: 'all 0.2s linear',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'none',
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
          backgroundColor: 'transparent',
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexDirection: 'row-reverse',
          margin: '0 5px',

          '&.Mui-expanded': {
            margin: '0 5px',
          },
        },

        expandIconWrapper: {
          color: ThemeColors.white,
          transform: 'rotate(90deg)',

          '&.Mui-expanded': {
            transform: 'rotate(270deg)',
          },

          '& .MuiSvgIcon-root': {
            fontSize: '1rem',
            fill: '#8e8e8e',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          '& .MuiButtonBase-root': {
            fontWeight: 600,
            color: '#9c9c9c',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: '100%',
          width: '100%',
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: ThemeColors.white,
          '& .MuiButtonBase-root': {
            color: ThemeColors.white,
          },
        },
      },
    },
  },
});

export default theme;
