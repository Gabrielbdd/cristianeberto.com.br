import * as React from 'react'

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
}

const Container = ({ classes, children }: IContainerProps & WithStyles) => (
 <div className={classes.root}>
   {children}
 </div>
)

export default withStyles(styles)(Container)