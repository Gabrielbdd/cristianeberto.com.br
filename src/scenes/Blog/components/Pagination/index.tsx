import * as React from 'react'
import { Button } from 'material-ui'
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
  MoreHoriz
} from 'material-ui-icons'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'
import { navigateTo } from 'gatsby-link'
import { uniq } from 'lodash'

import PaginationButton from './PaginationButton'

import returnType from '../../../../utils/returnType'
import getPageID from '../../getPageID';

const styles = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '20px 0'
  },

  button: {
    minWidth: '40px',
    height: '40px',
    padding: '0',
    borderRadius: '90px',
    color: theme.palette.primary[500],

    '&[disabled=""]': {
      color: theme.palette.primary[200]
    }
  },

  more: {
    color: theme.palette.primary[500]
  }
})

const MORE = 'more'

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  firstPage: string
  lastPage: string
  nextPage: string | null
  previousPage: string | null
  actualPage: string
}

class Pagination extends React.Component<IProps & WithStyles> {
  navigateToPreviousPage = () => {
    navigateTo(this.props.previousPage!)
  }

  navigateToNextPage = () => {
    navigateTo(this.props.nextPage!)
  }

  navigateToFirstPage = () => {
    navigateTo(this.props.firstPage)
  }

  navigateToLastPage = () => {
    navigateTo(this.props.lastPage)
  }

  render () {
    const { classes, firstPage, previousPage, nextPage, lastPage, actualPage } = this.props
    const isCloseToStart = Math.ceil((getPageID(lastPage) / 2)) >= getPageID(actualPage)
    let navigationPaths = uniq([ previousPage, actualPage, nextPage ])

    if (lastPage != firstPage) {
      if (isCloseToStart) {
        if (firstPage === actualPage && getPageID(lastPage) - 1 > getPageID(nextPage!)) {
          navigationPaths.push(`/blog/page/${getPageID(nextPage!) + 1}`)
        }
  
        if (getPageID(nextPage!) < getPageID(lastPage)) {
          if (getPageID(nextPage!) + 1 < getPageID(lastPage)) {
            navigationPaths.push(MORE)
          }

          navigationPaths.push(lastPage)
        }
      } else {
        if (lastPage === actualPage && getPageID(firstPage) + 1 < getPageID(previousPage!)) {
          navigationPaths.unshift(`/blog/page/${getPageID(previousPage!) - 1}`)
        }
  
        if (getPageID(previousPage!) > getPageID(firstPage)) {
          if (getPageID(previousPage!) - 1 > getPageID(firstPage)) {
            navigationPaths.unshift(MORE)
          }
          navigationPaths.unshift(firstPage)
        }
      }
    }

    return (
      <div className={classes.root}>
        <Button className={classes.button} disabled={firstPage === actualPage} onClick={this.navigateToFirstPage}>
          <FirstPage />
        </Button>
        <Button className={classes.button} disabled={!previousPage} onClick={this.navigateToPreviousPage}>
          <ChevronLeft />
        </Button>
        {navigationPaths.map((navigationPath) => {
          if (navigationPath === MORE) {
            return <MoreHoriz className={classes.more} key={MORE} />
          }

          return (
            <PaginationButton
              key={navigationPath!}
              active={navigationPath === actualPage}
              path={navigationPath!}
              onClick={() => navigateTo(navigationPath!)}
            />
          )
        })}
        <Button className={classes.button} disabled={lastPage === actualPage} onClick={this.navigateToNextPage}>
          <ChevronRight />
        </Button>
        <Button className={classes.button} disabled={!nextPage} onClick={this.navigateToLastPage}>
          <LastPage />
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Pagination)