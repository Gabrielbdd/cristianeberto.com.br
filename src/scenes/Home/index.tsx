import * as React from 'react'
import Slider from 'react-slick'
import { Grid, Button, ButtonBase, Divider, Paper, withStyles } from 'material-ui'
import Img from 'gatsby-image'
import { navigateTo } from 'gatsby-link'
import {
  MarkdownRemarkConnection,
  ImageSharp,
  ImageSharpConnection,
  MarkdownRemark,
} from 'graphql-types'
import Title from '../../components/Title'
import MainSlider from './components/MainSlider'
import ServicesSlider from './components/ServicesSlider'
import { StyledComponent } from 'utils/styledProps'
import normalizeAlt from '../../utils/normalizeAlt'

const injectStyles = withStyles(theme => ({
  root: {
    width: '100%',
    margin: '20px auto 0 auto',

    '& .slider': {
      width: '100%',

      '& .slick-dots li.slick-active button:before': {
        color: theme.palette.primary.main
      }
    },

    '& .about-us': {
      width: '100%',
      padding: 20,

      '& .cristiane-berto': {
        maxWidth: 150,
        margin: "0 auto",
        borderRadius: 180,
      },

      '& .ler-mais': {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 3,
        transition: `all 250ms ${theme.transitions.easing.easeIn}`,

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: 'white'
        }
      }
    },

    '& .services': {
      padding: 20
    },

    // '& .testimonials': {
    //   padding: 20
    // }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: '960px',
      padding: '0 40px'
    }
  }
}))

interface IHomeProps {
  data: {
    slides: MarkdownRemarkConnection,
    servicesCategories: MarkdownRemarkConnection
    cristianeBerto: ImageSharpConnection
  }
}

@injectStyles
class Home extends React.Component<IHomeProps & StyledComponent> {
  render () {
    const { classes, data } = this.props

    const slides = data.slides.edges!.reduce((arr, { node }) => {
      const { frontmatter, html } = node!
      const { image, title, position, order } = frontmatter!
      const slideImage = image!.children![0] as ImageSharp

      arr.push({
        image: slideImage,
        title: title!,
        html: html!,
        position: position!,
        order: order!,
        alt: normalizeAlt(image!.name!),
      })

      return arr
    }, [] as ISlide[])

    const servicesCategories = data.servicesCategories.edges!.reduce((acc, { node }) => {
      const { frontmatter } = node!
      const imageParent = frontmatter!.image!
      const image       = imageParent.children![0] as ImageSharp

      acc.push({ ...frontmatter, image, alt: normalizeAlt(imageParent.name!) })

      return acc
    }, [])

    const cristianeBertoImageSizes = data.cristianeBerto.edges![0].node!.sizes

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className="slider">
            <MainSlider slides={slides} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-us">
            <Grid container>
              <Grid item xs={12}>
                <Title leftLine>
                  Sobre
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
              Cristiane Berto queria criar uma clínica de estética com um diferencial: um lugar onde suas clientes poderiam ir para obter mais do que apenas tratamentos estéticos.
              </Grid>

              <Grid item xs={12} md={5}>
              E foi assim que a <strong>Clínica da Pele Cristiane Berto</strong> surgiu: construída com base em uma filosofia de que a clínica de estética poderia oferecer tratamentos especializados, excelentes e inovadores, tudo dentro de um ambiente restaurador e elegante. Conforto e experiência agora podem ir de mãos dadas.
              </Grid>


              {/* <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item style={{ marginLeft: "auto" }}>
                <Button
                  className="ler-mais"
                  color="primary"
                  onClick={() => navigateTo('/sobre')}
                >
                  Ler mais
                </Button>
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper className="services">
            <Grid container>
              <Grid item xs={12}>
                <Title leftLine>
                  {'Serviços & Tratamentos'}
                </Title>
                <em>Oferecemos uma ampla gama de serviços de beleza adaptados às necessidades de cada um</em>
              </Grid>

              <Grid item xs={12}>
                <ServicesSlider slides={servicesCategories} />
              </Grid>

            </Grid>
          </Paper>
        </Grid>


        {/**
         * @todo implementar testemunhos pegos de avaliações feitas na página do Facebook
         */}
        {/* <Grid item xs={12}>
          <Paper className="testimonials">
            <Grid container>
              <Grid item xs={12}>
                <Title>
                  Testemunhos
                </Title>
                <em>Veja porque nossos clientes nos amam tanto</em>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
    )
  }
}

export default Home