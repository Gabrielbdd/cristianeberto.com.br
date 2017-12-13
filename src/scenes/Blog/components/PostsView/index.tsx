import * as React from 'react'
import { Grid } from 'material-ui'
import { Theme, WithStyles, StyledComponentProps, withStyles } from 'material-ui/styles'

import { ImageSharp, MarkdownRemarkEdge } from '../../../../graphql-types'

import returnType from '../../../../utils/returnType'

import Post from './Post'

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    flex: 1,
    margin: '0'
  },

  [theme.breakpoints.up('md')]: {
    root: {
      padding: '40px 110px'
    }
  }
})

const stylesType = returnType(styles)

interface IPostsViewProps extends  WithStyles<keyof typeof stylesType> {
  posts: MarkdownRemarkEdge[]
}

const PostsView = ({ posts, classes }: IPostsViewProps) => (
  <Grid
    container
    className={classes.root}
    justify="center"
  >
    {posts.map(({ node }) => {
      const { frontmatter, timeToRead, fields: { slug }, excerpt } = node!
      const cover = frontmatter!.image!.children![0] as ImageSharp
  
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
              sizes={cover.sizes}
              content={excerpt!}
            />
          </Grid>
        )
      }

      return null
    })}
  </Grid>
)

export default withStyles(styles)(PostsView)