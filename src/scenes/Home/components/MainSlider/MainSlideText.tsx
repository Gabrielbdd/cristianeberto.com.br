import * as React from 'react'
import { withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

function parsePosition ([ horizontally, vertically ]: string) {
  interface IPosition {
    justifyContent: 'flex-start' | 'flex-end' | 'center'
    alignItems: 'flex-start' | 'flex-end'
    right: string
    left: string
    textAlign: 'start' | 'end'
  }

  let flexPosition = {} as IPosition

  switch (vertically) {
    case 'T':
      flexPosition.justifyContent = 'flex-start'
      break;
    case 'M':
      flexPosition.justifyContent = 'center'
      break;
    default:
      flexPosition.justifyContent = 'flex-end'
  }

  switch (horizontally) {
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

const injectStyles = withStyles(theme => ({
  root: {
    position: 'absolute' as 'absolute',
    top: 0,
    width: '100%',
    maxWidth: 300,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: 20,
    fontSize: 20,

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
      fontSize: 30,
    }
  }
}))

export interface IMainSlideTextContent {
  title: string
  html: string
  position: string
}

type IProps = {
  content: IMainSlideTextContent
}

const MainSlideText: React.StatelessComponent<IProps & StyledComponent> = ({ classes, content }) => {
  const { title, html, position } = content

  return (
    <div
      className={classes.root}
      style={Object.assign({}, parsePosition(position))}
      dangerouslySetInnerHTML={{ __html: `<h2>${title}</h2>${html}` }}
    />
  )
}

export default injectStyles(MainSlideText)