import * as React from 'react'
import * as classNames from 'classnames'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'

import getPageID from '../../getPageID'
import returnType from '../../../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    margin: '0 7px',
    borderRadius: '90px',
    boxShadow: theme.shadows[2],
    color: theme.palette.primary.main,
    cursor: 'pointer',
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn}`,

    '&:hover': {
      opacity: '0.8',
      boxShadow: theme.shadows[8],
      transform: 'translateY(-1px)'
    }
  },

  paginationButtonActive: {
    color: 'white',
    backgroundColor: theme.palette.primary.main
  }
})

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  active?: boolean
  path: string | undefined
  onClick?: () => any
}

const PaginationButton = (props: IProps) => {
  const paginationButtonClasses = classNames({
    [props.classes.root]: true,
    [props.classes.paginationButtonActive]: props.active
  })

  return (
    props.path
      ? <div
          className={paginationButtonClasses}
          onClick={props.onClick}
        >
          {getPageID(props.path)}
        </div>
      : null
  )
}

export default withStyles(styles)(PaginationButton)