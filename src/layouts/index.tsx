import * as React from 'react'
import { Tabs, Tab } from 'material-ui'

import './index.css'

import * as freshDesk from '../freshChat'
import Container from '../components/Container'

const tabPaths = [
  '/',
  '/blog',
  '/serviços',
  '/sobre',
  '/contato'
]

interface IProps {
  children: any
  location: any
  history: any
}

class DefaultLayout extends React.Component<IProps> {
  handletabChange = (e: any, tabIndex: number) => {
    this.props.history.push(tabPaths[tabIndex])
  }

  componentDidMount () {
    //freshDesk.load()
    freshDesk.init()
  }

  render () {
    const activeTab = tabPaths.slice(1).findIndex((tabPath, index) => {
      if (tabPath === '/') {
        return this.props.location.pathname === tabPath
      } else {
        return this.props.location.pathname.startsWith(tabPath)
      }
    }) + 1 || 0

    return (
      <div>
        <header>
          <Container>
            <Tabs
              value={activeTab}
              onChange={this.handletabChange}
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
              scrollable
              style={{ justifyContent: 'center' }}
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
      </div>
    )
  }
}

export default DefaultLayout