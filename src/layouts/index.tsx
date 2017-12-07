import * as React from 'react'
import Helmet from 'react-helmet'
import { Tabs, Tab } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  Theme,

  withStyles
} from 'material-ui/styles'

import './index.css'

import * as freshDesk from '../freshChat'
import Footer from '../components/Footer'
import Container from '../components/Container'

import returnType from '../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn}`,

      '&:hover': {
        color: theme.palette.primary[500]
      }
    }
  }
})

const stylesType = returnType(styles)

const tabPaths = [
  '/',
  '/blog',
  '/serviços',
  '/sobre',
  '/contato'
]

interface IProps extends WithStyles<keyof typeof stylesType> {
  children: any
  location: any
  history: any
}

class DefaultLayout extends React.Component<IProps> {
  handletabChange = (e: any, tabIndex: number) => {
    this.props.history.push(tabPaths[tabIndex])
  }

  componentDidMount () {
    freshDesk.init()
  }

  render () {
    const { classes } = this.props
    const activeTab = tabPaths.slice(1).findIndex((tabPath, index) => {
      if (tabPath === '/') {
        return this.props.location.pathname === tabPath
      } else {
        return this.props.location.pathname.startsWith(tabPath)
      }
    }) + 1 || 0

    return (
      <div className={classes.root}>
        <Helmet defaultTitle="Cristiane Berto" titleTemplate="%s | Cristiane Berto">
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Cristiane Berto" />
          <html lang="pt-br" />
        </Helmet>
        <header>
          <Container>
            <Tabs
              value={activeTab}
              onChange={this.handletabChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              fullWidth
            >
              <Tab label="Home" />
              <Tab label="Blog" />
              <Tab label="Serviços" />
              <Tab label="Sobre" />
              <Tab label="Contato" />
            </Tabs>
          </Container>
        </header>

        {this.props.children()}

        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(DefaultLayout)