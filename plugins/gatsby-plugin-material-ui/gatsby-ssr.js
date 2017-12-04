import React from 'react'
import { renderToString } from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { green, red } from 'material-ui/colors'

const sheets = new SheetsRegistry()

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString
}) => {
  /*const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    }
  })*/
  const theme = createMuiTheme()
  const jss = create(preset())

  jss.options.createGenerateClassName = createGenerateClassName

  const bodyHTML = renderToString(
    <JssProvider registry={sheets} jss={jss}>
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