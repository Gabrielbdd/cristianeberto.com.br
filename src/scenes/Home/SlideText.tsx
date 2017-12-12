import * as React from 'react'
import { StyleRules, StyledComponentProps, WithStyles, Theme, withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

function parsePosition ([ horizontally, vertically ]: string) {
  interface FlexPosition {
    justifyContent: 'flex-start' | 'flex-end' | 'center'
    alignItems: 'flex-start' | 'flex-end'
    right: string
    left: string
    textAlign: 'start' | 'end'
  }

  let flexPosition = {} as FlexPosition

  switch(vertically) {
    case 'T':
      flexPosition.justifyContent = 'flex-start'
      break;
    case 'M':
      flexPosition.justifyContent = 'center'
      break;
    default:
      flexPosition.justifyContent = 'flex-end'
  }

  switch(horizontally) {
    case 'L':
      flexPosition.alignItems = 'flex-start'
      flexPosition.textAlign = 'start'
      flexPosition.left = '0'
      break;
    default:
      flexPosition.alignItems = 'flex-end'
      flexPosition.textAlign = 'end'
      flexPosition.right = '0'
  }

  return flexPosition
}

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: 240,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,

    '& h2': {
      marginBottom: 10,
      color: theme.palette.primary[500]
    },

    '& p': {
      fontWeight: 300
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: 550,
      fontSize: 35,
    }
  }
})

export interface ISlideTextContent {
  title: string
  html: string
  position: string
}

type IProps = {
  content: ISlideTextContent
}

const SlideText: React.StatelessComponent<IProps & StyledComponent> = ({ classes, content }) => {
  const { title, html, position } = content

  return (
    <div
      className={classes.root}
      style={Object.assign({}, parsePosition(position))}
      dangerouslySetInnerHTML={{ __html: `<h2>${title}</h2>${html}` }}
    />
  )
}

export default withStyles(styles)(SlideText)