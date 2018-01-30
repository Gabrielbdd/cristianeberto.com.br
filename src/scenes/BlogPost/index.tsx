import * as React from 'react'
import Link from 'gatsby-link'
import { Divider, withStyles } from 'material-ui'
import { StyledComponent } from 'utils/styledProps'
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection } from 'graphql-types'
import Img from 'gatsby-image'

import translateDate from '../../utils/translateDate'
import Disqus from '../../components/Disqus'
import PostSEO from './components/SEO'
import ReadingProgressBar from './components/ReadingProgressBar'
import Author from './components/Author'

const injectStyles = withStyles(theme => ({
  root: {
    padding: '30px 20px',
    color: theme.palette.text.primary,
    
    '& p': {
      fontSize: '1.1em',
      letterSpacing: '.01em',
      lineHeight: '1.58',
      marginTop: 21,
    },

    '& h2': {
      margin: '30px 0 20px'
    },

    '& li': {
      listStyle: 'inside',
      marginLeft: '30px'
    },

    '& ul': {
      marginTop: '10px'
    },

    '& blockquote': {
      paddingLeft: 30,
      color: 'rgba(0,0,0,.68)',
      fontStyle: 'italic',
      letterSpacing: '3.995em',
      fontSize: 19,
    },
  },

  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontSize: 34,

    '&::after': {
      content: `''`,
      height: '2px',
      width: '50px',
      background: theme.palette.primary.main,
      display: 'block',
      margin: '20px auto 0'
    }
  },

  thumbnail: {
    marginTop: 30,

    '& [src*="data:image"]': {
      filter: 'blur(5px)',
    },
  },

  date: {
    padding: '15px 0',
    fontSize: '13px !important',
    fontStyle: 'italic' as 'italic',
    textAlign: 'center'
  },

  [theme.breakpoints.up('sm')]: {
    root: {
      paddingLeft: 80,
      paddingRight: 80,
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      paddingLeft: 120,
      paddingRight: 120,
    }
  }
}))

interface IProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
  }
}

@injectStyles
class BlogPost extends React.PureComponent<IProps & StyledComponent> {
  render () {
    const { html, frontmatter, fields, excerpt, wordCount } = this.props.data.post
    const { classes } = this.props

    const title  = frontmatter!.title!
    const image  = frontmatter!.image!.children![0] as ImageSharp
    const author = frontmatter!.author!.id!
    const slug   = fields!.slug!

    return (
      <article className={classes.root}>
        <PostSEO
          title={title}
          headline={title}
          image={image.sizes!.src!}
          author={author}
          date={{
            created: frontmatter!.createdDate!,
            published: frontmatter!.createdDate!,
            modified: frontmatter!.updatedDate!,
          }}
          description={excerpt!}
          wordcount={wordCount!.words!}
          slug={slug}
          tags={frontmatter!.tags!}
        />

        <ReadingProgressBar>
          <h1 className={classes.title}>{frontmatter!.title}</h1>
          <Img sizes={image!.sizes!} className={classes.thumbnail} />
          <p className={classes.date}>Atualizado em {translateDate(frontmatter!.updatedDate!)}</p>
          <section dangerouslySetInnerHTML={{ __html: html as string }} />
          <p className={classes.date}>Publicado em {translateDate(frontmatter!.createdDate!)}</p>
        </ReadingProgressBar>

        <Divider />

        <Author author={frontmatter!.author!} />

        <Divider />

        <Disqus
          shortname="cristiane-berto"
          identifier={title}
          title={title}
          url={`http://cristianeberto.com.br${slug}`}
        />
      </article>
    )
  }
}

export default BlogPost