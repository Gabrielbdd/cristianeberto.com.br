import * as React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { Grid, Button, Divider, Paper } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'
import Img from 'gatsby-image'
import { navigateTo } from 'gatsby-link'

import { MarkdownRemarkConnection, ImageSharp, ImageSharpConnection } from '../../graphql-types'

import Title from '../../components/Title'
import Slide, { ISlide } from './Slide'
import returnType from '../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    width: '100%',
    margin: '20px auto 0 auto',

    '& .slider': {
      width: '100%',

      '& .slick-dots li.slick-active button:before': {
        color: theme.palette.primary[500]
      }
    },

    '& .about-us': {
      width: '100%',
      padding: 20,

      '& .cristiane-berto': {
        maxWidth: 150,
        margin: "0 auto",
        borderRadius: 180,
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: '960px',
      padding: '0 40px'
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  data: {
    slides: MarkdownRemarkConnection,
    cristianeBerto: ImageSharpConnection
  }
}

class Home extends React.Component<IProps & WithStyles> {
  render () {
    const { classes, data } = this.props

    const slides = data.slides.edges!.reduce((arr, { node }) => {
      const { frontmatter, html } = node!
      const { image, title, position } = frontmatter!
      const slideImage = image!.children![0] as ImageSharp

      arr.push({
        image: slideImage,
        title: title!,
        html: html!,
        position: position!
      })

      return arr
    }, [] as ISlide[])
    const cristianeBertoImageSizes = data.cristianeBerto.edges![0].node!.sizes

    return (
      <Grid container className={classes.root}>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>

        <Grid item xs={12}>
          <Paper className="slider">
            <Slider
              arrows={false}
              infinite
              autoplay
              autoplaySpeed={5000}
            >
              {slides.map(slide => (
                <div key={slide.title}>
                  <Slide slide={slide} />
                </div>
              ))}
            </Slider>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-us">
            <Grid container>
              <Grid item xs={12}>
                <Title>
                  Sobre nós
                </Title>
                <em>Por que nós somos diferentes? Venha e descubra</em>
              </Grid>

              <Grid item xs={12} md={2}>
                <Img
                  className="cristiane-berto"
                  sizes={cristianeBertoImageSizes}
                />
              </Grid>

              <Grid item xs={12} md={5}>
                Duis nulla Lorem occaecat qui Lorem eu esse est. Duis id sit excepteur tempor dolore reprehenderit nostrud nisi aliqua amet pariatur elit est. Laborum ad irure elit do cupidatat incididunt cupidatat. Qui in enim elit aute. Quis id ipsum tempor duis nisi ea nostrud nostrud. Occaecat ipsum adipisicing est ea quis elit Lorem ea ullamco qui laboris nostrud. Laborum cupidatat occaecat excepteur in aute mollit commodo laboris id labore fugiat do labore velit.
              </Grid>

              <Grid item xs={12} md={5}>
                Ea nulla voluptate voluptate ex reprehenderit ex. Adipisicing ea irure nostrud consequat adipisicing magna irure labore in id labore tempor minim. Est nulla cupidatat et consequat qui enim tempor officia mollit commodo magna in occaecat. Tempor voluptate nisi sunt do enim incididunt reprehenderit culpa sint veniam culpa cupidatat do dolor.
              </Grid>


              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item style={{ marginLeft: "auto" }}>
                <Button color="primary" onClick={() => navigateTo('/sobre')}>
                  Ler mais
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Home)