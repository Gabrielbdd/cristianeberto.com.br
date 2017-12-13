import * as React from 'react'
import Helmet from 'react-helmet'
import { Theme, StyleRules, withStyles } from 'material-ui/styles'

import { MarkdownRemarkConnection, ImageSharp } from '../../graphql-types'

import Container from '../../components/Container'
import PostsView from './components/PostsView'
import Pagination from './components/Pagination'
import { StyledComponent } from 'utils/styledProps'

import getActualPage from './getPageID'

interface IProps {
  data: {
    tags: MarkdownRemarkConnection
    posts: MarkdownRemarkConnection
  }

  location: {
    pathname: string
  }
}

const styles = (theme: Theme): StyleRules => ({
  root: {
    marginTop: '20px'
  }
})

const Blog = (props: IProps & StyledComponent) => {
  let totalPages   = Math.ceil(props.data.posts.totalCount! / 10),
      actualPage   = getActualPage(props.location.pathname),
      firstPage    = 1,
      lastPage     = totalPages,
      previousPage = actualPage === firstPage ? null : actualPage - 1,
      nextPage     = actualPage === lastPage ? null : actualPage + 1

  return (
    <Container className={props.classes.root}>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <PostsView posts={props.data.posts.edges} />

      <Pagination
        actualPage={`/blog/page/${actualPage}`}
        firstPage={`/blog/page/${firstPage}`}
        lastPage={`/blog/page/${lastPage}`}
        previousPage={previousPage ? `/blog/page/${previousPage}` : null}
        nextPage={nextPage ? `/blog/page/${nextPage}` : null}
      />
    </Container>
  )
}

export default withStyles(styles)(Blog)