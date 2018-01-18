import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { indigo } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d7b46a'
    },
    secondary: {
      main: indigo[500]
    }
  }
})

exports.onInitialClientRender = () => {
  const jssStyles = document.querySelector(`#jss-server-side`)

  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles)
  }
}


exports.wrapRootComponent = ({ Root }) => () => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    <Root />
  </MuiThemeProvider>
)