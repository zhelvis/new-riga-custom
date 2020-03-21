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
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.globalPadding.h,
    paddingRight: theme.globalPadding.h,
    paddingBottom: theme.globalPadding.v,
    paddingTop: theme.globalPadding.v,
  },
  block: {
    paddingLeft: theme.globalPadding.h,
    paddingRight: theme.globalPadding.h,
    paddingTop: theme.globalPadding.v,
    paddingBottom: theme.globalPadding.v,
  },
  blockTitle: {
    marginBottom: theme.globalPadding.v,
  },
}))

const query = gql`
  {
    allServiceGroups {
      name
      services {
        name
      }
    }
  }
`

export default function Services() {
  const { loading, data } = useQuery(query)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.block}>
        <Typography align="center" variant="h2" className={classes.blockTitle}>
          Услуги
        </Typography>
        <div>
          {!loading &&
            data.allServiceGroups.map((group, i) => (
              <ExpansionPanel variant="outlined" key={group.name}>
                <ExpansionPanelSummary
                  aria-controls={`panel${i}-hedaer`}
                  id={`panel${i}-hedaer`}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>{group.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer component={Paper} elevation={0}>
                    <Table>
                      <TableBody>
                        {group.services.map(service => (
                          <TableRow key={service.name}>
                            <TableCell>{service.name}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
        </div>
      </Paper>
    </div>
  )
}
