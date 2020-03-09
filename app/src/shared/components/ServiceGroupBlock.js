import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  makeStyles,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(() => ({
  tableCell: {
    paddingLeft: 0,
  },
}))

export default function ServiceGroupBlock({ data }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      {data.map((group, i) => (
        <ExpansionPanel key={group.name} elevation={0}>
          <ExpansionPanelSummary
            aria-controls={`panel${i}-hedaer`}
            id={`panel${i}-hedaer`}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h6">{group.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableBody>
                  {group.services.map(service => (
                    <TableRow key={service.name}>
                      <TableCell className={classes.tableCell}>
                        {service.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  )
}
