import * as React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { Grid, Typography } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'
import Img from 'gatsby-image'

import { MarkdownRemarkConnection, ImageSharp } from '../../graphql-types'

import Title from '../../components/Title'
import Slide, { ISlide } from './Slide'
import returnType from '../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: '320px',
    width: '100%',
    margin: '30px auto 0 auto',

    '& .slider': {
      width: '100%',

      '& .slick-dots li.slick-active button:before': {
        color: theme.palette.primary[500]
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
    slides: MarkdownRemarkConnection
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
            type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>

        <Grid item className="slider">
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
        </Grid>

        <Grid item>
          <Title>Sobre nós</Title>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Home)