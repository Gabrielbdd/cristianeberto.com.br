import * as React from 'react'
import { Paper, IconButton, Typography, withStyles } from 'material-ui'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import * as classnames from 'classnames'

import { StyledComponent } from 'utils/styledProps'
import { MarkdownRemark } from 'graphql-types'

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',
    padding: '12px 20px',

    '& .content': {
      paddingBottom: 16,
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center' as 'center'
  },

  header__title: {
    flex: '1',
    fontSize: '1.2rem',
    fontWeight: 500 as 500,
    color: theme.palette.grey.A400,
  },

  header__price: {
    color: theme.palette.primary[500],
    fontWeight: 500 as 500
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
}))

interface IProps {
  service: MarkdownRemark
}

@injectStyles
class Service extends React.Component<IProps & StyledComponent> {
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
          {/* <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={this.handleExpand}
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </div>

        {/* <Collapse in={expanded} unmountOnExit>
          <section
            className="content"
            dangerouslySetInnerHTML={{
              __html: `${__html}</br><p>Duração: ${time} mins</p>`
            }}
          />
        </Collapse> */}
      </Paper>
    )
  }
}

export default Service