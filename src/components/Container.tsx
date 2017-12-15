import * as React from 'react'
import * as classnames from 'classnames'
import { withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

const injectStyles = withStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    margin: '0 auto'
  },

  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: theme.breakpoints.values.md,
    }
  }
}))

interface IContainerProps {
  children?: React.ReactNode
  className?: string
}

const Container = (props: IContainerProps & StyledComponent) => {
  const classNames = classnames({
    [props.classes.root]: true,
    [props.className || '']: !!props.className
  })
  
  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

export default injectStyles(Container)