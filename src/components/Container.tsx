import * as React from 'react'
import * as classnames from 'classnames'
import {
  StyleRules,
  StyledComponentProps,
  WithStyles,

  withStyles
} from 'material-ui/styles'

const styles: StyleRules = {
  root: {
    margin: '0 auto',
    maxWidth: '960px'
  }
}

interface IContainerProps extends StyledComponentProps<keyof typeof styles> {
  children?: React.ReactNode
  className: string
}

const Container = (props: IContainerProps & WithStyles) => {
  const classNames = classnames({
    [props.classes.root]: true,
    [props.className]: true
  })
  
  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

export default withStyles(styles)(Container)