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

const data = [
  {
    title: 'Полный спектр услуг по ремонту автомобиля',
    text:
      'Кроме того, у нас есть в наличии запчасти для иномарок и отечественных автомобилей',
    img: '/img/icons/icon1.png',
  },
  {
    title: 'Профессиональное оборудование',
    text:
      'Мы используем только профессиональное оборудование и запчасти от ведущих мировых производителей',
    img: '/img/icons/icon3.png',
  },
  {
    title: 'Высокая квалификация мастеров',
    text:
      'Специалисты нашего сервиса – профессионалы с опытом работы более 10 лет в сфере покраски и ремонта авто',
    img: '/img/icons/icon2.png',
  },
  {
    title: 'Ваш автомобиль в сохранности',
    text:
      'На время выполнения работ и ожидания запчастей для ремонта, ваш автомобиль будет находится на закрытой и охраняемой территории',
    img: '/img/icons/icon4.png',
  },
  {
    title: 'Гарантия на работу',
    text:
      'В отличии от большинства СТО, мы не боимся давать гарантию на свою работу',
    img: '/img/icons/icon5.png',
  },
  {
    title: 'Акции и скидки',
    text:
      'Каждый месяц у нас проводятся акции и скидки на определенные виды услуг',
    img: '/img/icons/icon6.png',
  },
  {
    title: 'Честные цены',
    text:
      'Согласованная с вами цена на ремонт и кузовные работы останется неизменной — без дополнительных затрат и наценок на детали',
    img: '/img/icons/icon7.png',
  },
  {
    title: 'Всегда точно в срок',
    text:
      'Мы всегда заканчиваем все работы точно в оговоренный срок, и никак иначе',
    img: '/img/icons/icon8.png',
  },
]

export default function AdvantageBlock() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.block} elevation={3}>
        <Typography align="center" variant="h2" className={classes.blockTitle}>
          Преимущества
        </Typography>
        <Grid container alignContent="stretch" spacing={2}>
          {data.map((advantage, i) => (
            <Grid key={i} item xs={12} md={6}>
              <Card className={classes.item} variant="outlined">
                <CardHeader
                  avatar={
                    <img
                      className={classes.icon}
                      alt={advantage.title}
                      src={advantage.img}
                    />
                  }
                  title={advantage.title}
                  titleTypographyProps={{
                    className: classes.itemTitle,
                  }}
                />
                <CardContent>
                  <Typography>{advantage.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  )
}
