import * as React from 'react'
import {
  StyleRules,
  WithStyles,
  Theme,

  withStyles
} from 'material-ui/styles'

import returnType from '../utils/returnType'
import { StyledComponentProps } from 'material-ui/styles/withStyles';

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '30px',
    textTransform: 'uppercase',

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      width: '5px',
      height: '100%',
      backgroundColor: theme.palette.primary[500]
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends WithStyles<keyof typeof stylesType> {}

const Title: React.StatelessComponent<IProps> = ({ classes, children }) => (
  <h2 className={classes.root}>
    {children}
  </h2>
)

export default withStyles(styles)(Title)