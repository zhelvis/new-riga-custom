import React from 'react'
import { Hidden } from '@material-ui/core'

import Desktop from './DesktopHeader'
import Mobile from './MobileHeader'

export default function Header() {
  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        <Desktop />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Mobile />
      </Hidden>
    </React.Fragment>
  )
}
