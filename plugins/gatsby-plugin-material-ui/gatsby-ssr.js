import React from 'react'
import { renderToString } from 'react-dom/server'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { indigo } from 'material-ui/colors'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'

const sheets = new SheetsRegistry()

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString
}) => {

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

  const generateClassName = createGenerateClassName()

  const bodyHTML = renderToString(
    <JssProvider registry={sheets} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
}

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <style
      key="jss-server-side"
      id="jss-server-side"
      dangerouslySetInnerHTML={{ __html: sheets.toString()}}
    />
  ])
}