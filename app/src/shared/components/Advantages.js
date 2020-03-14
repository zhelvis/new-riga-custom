import React from 'react'
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core'
import ContentBlock from './ContentBlock'

const useStyles = makeStyles(() => ({
  img: {
    height: 32,
    width: 32,
  },
}))

export default function Advantage() {
  const classes = useStyles()

  return (
    <ContentBlock>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <img className={classes.img} alt="gear" src="/img/gear.png" />
              }
              title="Title"
              titleTypographyProps={{
                variant: 'h5',
              }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <img className={classes.img} alt="gear" src="/img/gear.png" />
              }
              title="Title"
              titleTypographyProps={{
                variant: 'h5',
              }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <img className={classes.img} alt="gear" src="/img/gear.png" />
              }
              title="Title"
              titleTypographyProps={{
                variant: 'h5',
              }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <img className={classes.img} alt="gear" src="/img/gear.png" />
              }
              title="Title"
              titleTypographyProps={{
                variant: 'h5',
              }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ContentBlock>
  )
}
