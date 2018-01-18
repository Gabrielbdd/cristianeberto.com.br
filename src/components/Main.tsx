import * as React from 'react'
import * as classnames from 'classnames'
import { withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

const injectStyles = withStyles(theme => ({
  root: {
    width: '100%',
    margin: '20px auto 0 auto',
  },
}))

interface IMainProps {
  children: React.ReactNode
  className?: string
}

const Main = (props: IMainProps & StyledComponent) => {
  const classNames = classnames({
    [props.classes.root]: true,
    [props.className || '']: !!props.className
  })
  
  return (
    <main className={classNames}>
      {props.children}
    </main>
  )
}

export default injectStyles(Main)