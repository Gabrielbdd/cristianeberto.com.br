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

import SocialIcon from './SocialIcon'
import returnType from '../utils/returnType'

import cristianeBertoLogo = require('../assets/cristiane-berto.png')

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    margin: '40px auto 0 auto',
    padding: 8,

    '& > *': {
      textAlign: 'center',

      '& .title': {
        margin: '0 0 40px',
        fontWeight: 500,
        textTransform: 'uppercase'
      },

      '& .content': {
        padding: '40px 0'
      }
    },

    '& .contact': {
      '& .content > a': {
        lineHeight: 2
      }
    },

    '& .navigation': {
      backgroundColor: '#f9f9f9',

      '& .logo': {
        '& img': {
          height: '60px',
          marginTop: '20px'
        }
      },

      '& li': {
        margin: '25px 0'
      }
    },

    '& .social': {
      backgroundColor: '#f9f9f9',

      '& .social__list': {
        '& > *': {
          marginBottom: '15px'
        },

        '& > *:last-child': {
          marginBottom: '0'
        },

        '& svg': {
          width: '50px',
          height: '50px',
          transition: `fill ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn}`,
            
          '&:hover': {
            fill: theme.palette.primary[500] + '!important'
          }
        }
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: theme.breakpoints.values.md,
      padding: '0 40px',

      '& > *': {
        margin: '0',

        '& .content': {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%',
          padding: '100px 0 0'
        }
      },

      '& .contact': {
        order: '0',
        backgroundColor: '#f9f9f9'
      },

      '& .navigation': {
        order: '1',
        backgroundColor: 'inherit',

        '& .logo': {
          position: 'absolute',
          transform: 'translateX(-50%)',
          left: '50%'
        }
      },

      '& .social': {
        order: '2'
      },
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends WithStyles<keyof typeof stylesType> {}

class Footer extends React.Component<IProps> {
  render () {
    const { classes } = this.props

    return (
      <Grid className={classes.root} container justify="center" component="footer" spacing={0}>
        <Grid
          item
          xs={12}
          md={4}
          className="navigation"
          component="nav"
        >
          <Link to="/" className="logo">
            <img src={cristianeBertoLogo} alt="Cristiane Berto - Logo"/>
          </Link>
          <div className="content">
            <p className="title">Navegar</p>
            <ul>
              <li><Link to="#">Início</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/serviços">Serviços</Link></li>
              <li><Link to="/sobre">Sobre nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className="contact"
        >
          <div className="content">
            <p className="title">Contato</p>
            <a href="mailto: ola@cristianeberto.com.br">ola@cristianeberto.com.br</a>
            <br/>
            <a href="tel: 99137-0029">99137-0029</a>
            <br/>
            <br/>
            <br/>
            <a href="https://goo.gl/maps/7d91oc9DsXk" target="_blank">
              <span>Centro - BH</span>
              <br/>
              <span>Av. Amazonas, 687 | sala 405</span>
            </a>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className="social"
        >
          <div className="content">
            <p className="title">Continue conosco</p>
            <ul className="social__list">
              <li><a href="https://facebook.com/cristianebertooficial" target="_blank"><SocialIcon type="Facebook" fill="#333" /></a></li>
              <li><a href="https://instagram.com/cristianebertooficial" target="_blank"><SocialIcon type="Instagram" fill="#333" /></a></li>
            </ul>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)