import * as React from 'react'
import { Grid } from 'material-ui'
import { Theme, withStyles } from 'material-ui/styles'
import { ImageSharp, MarkdownRemarkEdge } from 'graphql-types'
import normalizeAlt from '../../../../utils/normalizeAlt'
import Post from './Post'


const injectStyles = withStyles(theme => ({
  root: {
    width: '100%',
    flex: 1,
    margin: '0'
  },

  [theme.breakpoints.up('md')]: {
    root: {
      padding: '10px 110px'
    }
  }
}))

interface IPostsViewProps {
  posts: MarkdownRemarkEdge[]
}

const PostsView = injectStyles<IPostsViewProps>(({ posts, classes }) => (
  <Grid
    container
    className={classes.root}
    justify="center"
  >
    {posts.map(({ node }) => {
      const { frontmatter, timeToRead, fields: { slug }, excerpt } = node!
      const cover = frontmatter!.image!.children![0] as ImageSharp
      const alt = frontmatter!.image!.name!
  
      if (cover.sizes) {
        return (
          <Grid
            item
            xs={12}
            md={6}
            key={slug}
          >
            <Post
              title={frontmatter!.title!}
              slug={slug!}
              image={{
                sizes: cover.sizes,
                alt: alt ? normalizeAlt(alt) : ''
              }}
              content={excerpt!}
              tags={frontmatter!.tags!}
            />
          </Grid>
        )
      }

      return null
    })}
  </Grid>
))

export default PostsView