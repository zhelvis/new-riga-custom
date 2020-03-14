import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const bpValues = {
  xs: 0,
  sm: 600,
  md: 1000,
  lg: 1280,
  xl: 1920,
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red.A700,
    },
    secondary: {
      main: red[500],
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${bpValues[key]}px)`,
  },
  bannerHeight: 375,
  drawerWidth: 240,
  globalPadding: '10vw',
})

export default theme
