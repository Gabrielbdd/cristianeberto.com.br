import * as React from 'react'
import { Tabs, Tab, withStyles } from 'material-ui'
import { navigateTo } from 'gatsby-link'
import { StyledComponent } from 'utils/styledProps'

import cristianeBertoLogo = require('../assets/cristiane-berto.png')

const injectStyles = withStyles(theme => ({
  root: {
    padding: '0 8px',

    '& .logo': {
      display: 'block',
      height: 60,
      margin: '15px auto',
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      padding: '0 48px'
    }
  }
}))

interface IProps {
  history: any
  location: any
}

const tabPaths = [
  '/',
  '/blog',
  '/serviços',
  // '/sobre',
  '/contato'
]

@injectStyles
class Header extends React.Component<IProps & StyledComponent> {
  handletabChange = (e: any, tabIndex: number) => {
    // this.props.history.push(tabPaths[tabIndex])
    navigateTo(tabPaths[tabIndex])
  }

  render () {
    const activeTab = tabPaths.slice(1).findIndex((tabPath, index) => {
      if (tabPath === '/') {
        return this.props.location.pathname === tabPath
      } else {
        return this.props.location.pathname.startsWith(tabPath)
      }
    }) + 1 || 0
    
    return  (
      <header className={this.props.classes.root}>
        <img src={cristianeBertoLogo} className="logo" />
        <Tabs
          value={activeTab}
          onChange={this.handletabChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="off"
          fullWidth
        >
          <Tab label="Home" />
          <Tab label="Blog" />
          <Tab label="Serviços" />
          {/* <Tab label="Sobre" /> */}
          <Tab label="Contato" />
        </Tabs>
      </header>
    )
  }
}

export default Header