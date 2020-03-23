import React from 'react'
import { Typography, Paper, makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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
    allPageContentBlocks(where: { name: "about" }) {
      block
      content
    }
  }
`

export default function AboutBlock() {
  const { loading, data } = useQuery(query)

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.block}>
        <Typography align="center" variant="h2" className={classes.blockTitle}>
          О нас
        </Typography>
        {!loading && <Typography>{getBlockContent('aboutMain')}</Typography>}
      </Paper>
    </div>
  )
}
