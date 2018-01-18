import * as React from 'react'
import * as classnames from 'classnames'
import Slider from 'react-slick'
import Helmet from 'react-helmet'
import { Grid, Hidden, withStyles } from 'material-ui'
import GridList, { GridListTile } from 'material-ui/GridList'
import Img from 'gatsby-image'

import { ImageSharpConnection } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'
import Title from '../../components/Title'
import Container from '../../components/Container'

const injectStyles = withStyles(theme => ({
  root: {
    padding: 8,

    '& > *': {
      marginBottom: 35
    },

    '& > *:last-child': {
      marginBottom: 0
    },

    '& .location-images': {
      padding: '20px 0'
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      padding: '0 40px'
    }
  }
}))

interface IProps {
  data: {
    internalImages: ImageSharpConnection
  }
}

@injectStyles
class Sobre extends React.Component<IProps & StyledComponent> {
  render () {
    const { classes, data } = this.props
    const internalImages = data.internalImages.edges!.map(edge => edge!.node!)

    return (
      <Grid container className={classes.root}>
        <Helmet>
          <title>Sobre</title>
        </Helmet>

        <Grid item xs={12}>
          <Title leftLine>Missão</Title>

          <br/>

          <p>Pariatur ad reprehenderit amet id incididunt minim Lorem. Et qui consequat ut ipsum reprehenderit qui pariatur nisi esse et. Sint laboris consectetur excepteur aute velit do deserunt non eiusmod. Culpa esse occaecat adipisicing dolor. Consequat ipsum non sit exercitation cupidatat sint aute mollit. Occaecat quis ipsum quis est enim ut sunt laboris esse aute culpa incididunt qui consequat.</p>

          <div className="location-images">
            <Hidden smDown>
              <GridList>
                {internalImages.map(({ sizes, id }) => (
                  <GridListTile key={id} >
                    <Img sizes={sizes} />
                  </GridListTile>
                ))}
              </GridList>
            </Hidden>

            <Hidden mdUp>
              <Slider dots arrows={false}>
                {internalImages.map(({ sizes, id }) => (
                  <div key={id} onDragStart={e => e.preventDefault()} >
                    <Img sizes={sizes} />
                  </div>
                ))}
              </Slider>
            </Hidden>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Title leftLine>Visão</Title>
          <br/>
          <p>Amet ad culpa officia commodo eu mollit magna cupidatat irure eu pariatur commodo et. Velit tempor reprehenderit dolor nulla id laboris ullamco. Dolore aliquip enim ipsum cillum voluptate sit officia consequat qui voluptate dolor.</p>
        </Grid>

        <Grid item xs={12}>
          <Title leftLine>Valores</Title>
          <br/>
          <p>Aliqua non adipisicing aute minim id sunt nulla in. Tempor pariatur magna voluptate minim amet deserunt anim magna ad. Tempor exercitation sunt eiusmod nisi dolore velit fugiat dolore quis. Nostrud minim commodo qui ex laboris officia cupidatat cupidatat dolore qui ea eu.</p>
        </Grid>
      </Grid>
    )
  }
}

export default Sobre