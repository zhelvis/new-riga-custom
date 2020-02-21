import { createMuiTheme } from '@material-ui/core/styles'
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
      default: '#fff',
    },
  },
  drawerWidth: 240,
  globalPadding: '10vw',
})

export default theme
