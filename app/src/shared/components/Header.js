import React from 'react'
import { Hidden } from '@material-ui/core'

import Desktop from './DesktopHeader'
import Mobile from './MobileHeader'

export default function Header(props) {
  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        <Desktop {...props} />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Mobile {...props} />
      </Hidden>
    </React.Fragment>
  )
}
