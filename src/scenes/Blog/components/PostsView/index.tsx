import * as React from 'react'
import {
  StyledComponentProps,

  withStyles,

  Grid
} from 'material-ui'

import { ImageSharp, MarkdownRemarkEdge } from '../../../../graphql-types'

import Post from './Post'

const styles = {
  root: {
    width: '100%',
    flex: 1,
    margin: '0',
    padding: '40px'
  }
}

interface IPostsViewProps extends StyledComponentProps {
  posts: MarkdownRemarkEdge[]
}

const PostsView = ({ posts, classes }: IPostsViewProps) => (
  <Grid
    container
    className={classes.root}
    justify="center"
  >
    {posts.map(({ node }) => {
      const { frontmatter, timeToRead, fields: { slug }, excerpt } = node
      const cover = frontmatter.image.children[0] as ImageSharp
  
      if (cover.sizes && cover.resolutions) {
        return (
          <Grid
            item
            xl={8}
            key={slug}
          >
            <Post
              title={frontmatter.title}
              slug={slug}
              resolutions={cover.resolutions}
              sizes={cover.sizes}
              content={excerpt}
            />
          </Grid>
        )
      }

      return null
    })}
  </Grid>
)

export default withStyles(styles)(PostsView)