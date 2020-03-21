import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red.A700,
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: '#f5f5f5',
    },
  },
  drawerWidth: 240,
  globalPadding: {
    h: '5vw',
    v: '2rem',
  },
})

export default responsiveFontSizes(theme)
