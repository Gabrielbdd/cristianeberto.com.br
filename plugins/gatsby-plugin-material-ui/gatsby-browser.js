import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { green, red } from 'material-ui/colors'

/*const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light'
  }
})*/

const theme = createMuiTheme()

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