import * as React from 'react'
import * as classnames from 'classnames'
import { withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

const injectStyles = withStyles(theme => ({
  root: {
    marginBottom: 5,
    textTransform: 'uppercase'
  },

  sLeftLine: {
    position: 'relative' as 'relative',
    paddingLeft: 20,

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      top: "50%",
      width: 5,
      height: 21,
      transform: "translateY(-50%)",
      background: theme.palette.primary.main
    }
  },
}))

interface IProps {
  leftLine?: boolean
}

const Title = injectStyles<IProps>(props => {
  const { classes, children, leftLine } = props
  const { root, sLeftLine } = classes

  const className = classnames(root, {
    [sLeftLine]: leftLine
  })

  return (
    <h2 className={className}>
      {children}
    </h2>
  )
})

export default Title