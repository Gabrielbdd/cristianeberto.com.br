import * as React from 'react'
import * as classnames from 'classnames'
import Link from 'gatsby-link'
import { Grid, Paper } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  Theme,

  withStyles
} from 'material-ui/styles'

import returnType from '../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    width: '100%',
    maxWidth: theme.breakpoints.width('md'),
    margin: '0 auto',
    padding: '40px',

    '& .item': {
      margin: '0',
      padding: '30px 0',
      textAlign: 'center',

      '& .title': {
        margin: '0 0 20px',
        fontWeight: 500,
        textTransform: 'uppercase'
      }
    },

    '& .contact': {
      backgroundColor: theme.palette.background.default,

      '& > a': {
        lineHeight: 2
      }
    },

    '& .navigation': {
    },

    '& .social': {
      backgroundColor: theme.palette.background.default
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends WithStyles<keyof typeof stylesType> {}

class Footer extends React.Component<IProps> {
  render () {
    const { classes } = this.props

    return (
      <Grid className={classes.root} container spacing={0} justify="center" component="footer">
        <Grid
          xs={12}
          md={4}
          className="contact item"
        >
          <p className="title">Contato</p>
          <a href="malito:ola@cristianeberto.com.br">ola@cristianeberto.com.br</a>
          <br/>
          <a href="tel:99137-0004">99137-0004</a>
          <br/>
          <br/>
          <br/>
          <a href="https://goo.gl/maps/7d91oc9DsXk" target="_blanck">
            <span>Centro - BH</span>
            <br/>
            <span>Av. Amazonas, 687 | sala 405</span>
          </a>
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="navigation item"
        >
          <p className="title">Navegar</p>
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="social item"
        >
          <p className="title">Vamos continuar próximos</p>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)