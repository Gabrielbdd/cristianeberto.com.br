import * as React from 'react'
import Helmet from 'react-helmet'

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
}

module.exports = (props: HtmlProps) => {
  const head = Helmet.rewind()

  const css = (process.env.NODE_ENV === `production`)
    ?
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    : null

  return (
    <html lang="en">
      <head>
        {props.headComponents}
        <title>Cristiane Berto</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="HandheldFriendly" content="true"/>
        <meta name="MobileOptimized" content="320"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {css}
      </head>
      <body>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
