import { createTheme } from '@mui/material/styles';
import { createStyled } from '@mui/system';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    google: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#FB8500',
      dark: '#f57602',
    },
    success: {
      main: '#21BC69',
    },
    secondary: {
      main: '#023047',
    },
    text: {
      primary: '#707070',
      secondary: '#797979',
    },
    info: {
      main: '#219EBC',
      dark: '#177C98',
    },
    warning: {
      main: '#FFDD00',
    },
    error: {
      main: '#E71111',
    },
    background: {
      default: '#F1F5F9',
    },
    grey: {
      400: '#707070',
    },
  },
  typography: {
    // button: {
    //   fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    // },
    h1: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h2: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h3: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h4: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h5: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        clearIcon: null,
        noOptionsText: 'No hay opciones disponibles',
      },
    },
  },
});

theme = createTheme( theme, {
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBlockEnd: theme.spacing( 0.5 ),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: theme.shape.borderRadius,
          paddingBlock: '0.5rem',
          paddingInline: '1rem',
        },
        containedPrimary: {
          color: '#fff',
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained',
        color: 'primary',
      },
      variants: [
        {
          props: { variant: 'google' },
          style: {
            border: `1px solid ${theme.palette.grey[400]}`,
            color: theme.palette.text.primary,
          },
        },
      ],
    },
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: false,
        disableRipple: false,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

theme.shadows[1] = '0 1px 5px rgba(0, 0, 0, 0.075)';

const styled = createStyled({ defaultTheme: theme });

export { theme, styled };
