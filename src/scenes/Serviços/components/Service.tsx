import * as React from 'react'
import { Paper, IconButton, Typography } from 'material-ui'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'
import * as classnames from 'classnames'

import { MarkdownRemark } from '../../../graphql-types'

import returnType from '../../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: 'relative',
    padding: '0px 15px'
  },

  header: {
    display: 'flex',
    alignItems: 'center'
  },

  header__title: {
    flex: '1',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: theme.palette.grey.A400,
  },

  header__price: {
    color: theme.palette.primary[500],
    fontWeight: 500
  },

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  }

})

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  service: MarkdownRemark
}

class Service extends React.Component<IProps & WithStyles> {
  state = {
    expanded: false
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    const { expanded } = this.state
    const { classes, service } = this.props
    const { name, price, time } = service.frontmatter!
    const __html = service.html!

    return (
      <Paper className={classes.root}>
        <div className={classes.header}>
          <h3 className={classes.header__title}>
            {name}
          </h3>
          <p className={classes.header__price}>
            R$ {price!.toFixed(2)}
          </p>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={this.handleExpand}
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={expanded} unmountOnExit>
          <section dangerouslySetInnerHTML={{ __html }} />
          <p>
           Duração: {time} mins
          </p>
        </Collapse>
      </Paper>
    )
  }
}

export default withStyles(styles)(Service)