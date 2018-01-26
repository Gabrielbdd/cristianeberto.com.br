import * as React from 'react'
import { Button, withStyles } from 'material-ui'
import ChevronLeft  from 'material-ui-icons/ChevronLeft'
import ChevronRight from 'material-ui-icons/ChevronRight'
import FirstPage    from 'material-ui-icons/FirstPage'
import LastPage     from 'material-ui-icons/LastPage'
import MoreHoriz    from 'material-ui-icons/MoreHoriz'
import { navigateTo } from 'gatsby-link'
import { uniq } from 'lodash'
import { StyledComponent } from 'utils/styledProps'
import PaginationButton from './PaginationButton'
import getPageID from '../../getPageID';

const injectStyles = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'flex-end' as 'flex-end',
    padding: '20px 0'
  },

  button: {
    minWidth: '40px',
    height: '40px',
    padding: '0',
    borderRadius: '90px',
    color: theme.palette.primary.main,

    '&[disabled=""]': {
      color: theme.palette.primary.light
    }
  },

  more: {
    color: theme.palette.primary.main
  }
}))

const MORE = 'more'

interface IProps {
  firstPage: string
  lastPage: string
  nextPage: string | null
  previousPage: string | null
  actualPage: string
}

@injectStyles
class Pagination extends React.Component<IProps & StyledComponent> {
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

export default Pagination