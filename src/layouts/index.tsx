import * as React from 'react'
import Helmet from 'react-helmet'
import { Tabs, Tab, withStyles } from 'material-ui'
import * as NProgress from 'nprogress'
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
  componentDidMount () {
    const navigateTo = window.___navigateTo

    window.___navigateTo = (path: string) => {
      const $main = document.querySelector('#___gatsby main')

      if ($main) {
        let loading = true

        const observer = new MutationObserver(() => {
          loading = false

          observer.disconnect()

          if (NProgress.isStarted()) {
            NProgress.done()
          }
        })

        observer.observe($main, { childList: true })

        if (loading) {
          NProgress.start()

          incrementProgress()

          function incrementProgress () {
            setTimeout(() => {
              if (NProgress.isStarted()) {
                NProgress.inc(Math.random() * 0.022)
                incrementProgress()
              }
            }, 250)
          }
        }
      }

      navigateTo(path)
    }

    freshChat.load()
  }

  render () {
    const { classes, history, location } = this.props

    return (
      <Container className={classes.root}>
        <Helmet
          defaultTitle="Cristiane Berto"
          titleTemplate="%s | Cristiane Berto"
          // script={[{ 
          //   type: 'text/javascript', 
          //   innerHTML: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
          //   analytics.load("zjmw25GTSt6Jh46CxktZhWw8K5y0UyvL");
          //   analytics.page();
          //   }}();`
          // }]}
        >
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Cristiane Berto" />
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