import * as React from 'react'
import Helmet from 'react-helmet'
import { Tabs, Tab, withStyles } from 'material-ui'
import { StyledComponent } from 'utils/styledProps'
import * as freshChat from '../lib/freshChat'
import withRoot from '../withRoot'

import './index.css'
require('typeface-roboto')

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const injectStyles = withStyles(theme => {
  return {
    root: {
      color: theme.palette.grey[800],
  
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
        transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn}`,
  
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
  
      '& .outstanding': {
        color: theme.palette.primary.light,
        textDecoration: "underline",
        cursor: 'pointer',
      }
    },
  }
})

interface IProps {
  children: any
  location: any
  history: any
}

@withRoot
@injectStyles
class DefaultLayout extends React.Component<IProps & StyledComponent> {
  render () {
    const { classes, history, location } = this.props

    return (
      <Container className={classes.root}>
        <Helmet
          defaultTitle="Cristiane Berto"
          titleTemplate="%s | Cristiane Berto"
        >
          <html lang="pt-br" />
        </Helmet>

        <Header history={history} location={location} />

        <Main>
          {this.props.children()}
        </Main>
        
        <Footer />
      </Container>
    )
  }
}

export default DefaultLayout