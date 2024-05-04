import { createTheme } from "@mui/material";

export const Theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiAutocomplete: {
    styleOverrides: {
        root: {
            ".MuiOutlinedInput-root": {
        padding: '0px',
            },
            fontSize: '12px'
        },
        listbox: {
            padding: '8px'
        },
        paper: {
            borderRadius: '12px',
        },
        option: {
            borderRadius: '8px',
            marginBottom: '4px',
            padding: '4px 8px'
        }
    }
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: '0px'
            }
        }
    }
  },
    typography: {
    h2: {
      fontSize: '14px'  
    },
    h3: {
        fontSize: '13px'
    }
}
});