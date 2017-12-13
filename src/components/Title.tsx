import * as React from 'react'
import {
  StyleRules,
  WithStyles,
  Theme,

  withStyles
} from 'material-ui/styles'

import returnType from '../utils/returnType'
import { StyledComponentProps } from 'material-ui/styles/withStyles';
import { StyledComponent } from 'utils/styledProps'

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: 'relative',
    paddingLeft: 20,
    marginBottom: 5,
    textTransform: 'uppercase',

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      top: "50%",
      width: 5,
      height: 21,
      transform: "translateY(-50%)",
      backgroundColor: theme.palette.primary[500]
    }
  }
})

const stylesType = returnType(styles)

interface IProps {}

const Title: React.StatelessComponent<IProps & StyledComponent> = ({ classes, children }) => (
  <h2 className={classes.root}>
    {children}
  </h2>
)

export default withStyles(styles)(Title)