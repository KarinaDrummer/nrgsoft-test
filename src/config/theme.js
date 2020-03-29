import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  paperBg: '#18181A',
  selection: '#232327',
}

export const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: theme.paperBg,
    },
  },
  overrides: {},
})
