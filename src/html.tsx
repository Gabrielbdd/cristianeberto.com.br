import * as React from 'react'

let styles: string

if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css')
  } catch (err) {
    console.log(err)
  }
}

interface HtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any
  htmlAttributes: any
  bodyAttributes: any
}

module.exports = class HTML extends React.Component<HtmlProps> {
  render () {
    const css = (process.env.NODE_ENV === `production`)
    ?
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    : null

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="HandheldFriendly" content="true"/>
          <meta name="MobileOptimized" content="320"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d7b46a" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
