import React from 'react'
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Paper,
} from '@material-ui/core'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.globalPadding.h,
    paddingRight: theme.globalPadding.h,
    paddingBottom: theme.globalPadding.v,
  },
  block: {
    paddingLeft: theme.globalPadding.h,
    paddingRight: theme.globalPadding.h,
    paddingTop: theme.globalPadding.v,
    paddingBottom: theme.globalPadding.v,
    marginTop: `-${theme.globalPadding.v}`,
  },
  item: {
    height: '100%',
    width: '100%',
  },
  icon: {
    padding: theme.spacing(1),
    height: 64,
    width: 64,
  },
  itemTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  blockTitle: {
    marginBottom: theme.globalPadding.v,
  },
}))

const query = gql`
  {
    allAdvantages {
      title
      description
      img
    }
  }
`

export default function AdvantageBlock() {
  const { loading, data } = useQuery(query)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.block} elevation={3}>
        <Typography align="center" variant="h2" className={classes.blockTitle}>
          Преимущества
        </Typography>
        <Grid container alignContent="stretch" spacing={2}>
          {!loading &&
            data.allAdvantages.map((advantage, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Card className={classes.item} variant="outlined">
                  <CardHeader
                    avatar={
                      <img
                        className={classes.icon}
                        alt={advantage.title}
                        src={advantage.img}
                        loading="lazy"
                        width={64}
                        height={64}
                      />
                    }
                    title={advantage.title}
                    titleTypographyProps={{
                      className: classes.itemTitle,
                    }}
                  />
                  <CardContent>
                    <Typography>{advantage.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </div>
  )
}
