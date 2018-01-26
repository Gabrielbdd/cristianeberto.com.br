import * as React from 'react'
import Link from 'gatsby-link'
import { Divider } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { StyledComponent } from 'utils/styledProps'
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection } from 'graphql-types'

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
    }
  },

  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontSize: '1.5em',

    '&::after': {
      content: `''`,
      height: '2px',
      width: '50px',
      background: theme.palette.primary.main,
      display: 'block',
      margin: '20px auto 0'
    }
  },

  date: {
    padding: '15px 0',
    fontSize: '13px !important',
    fontStyle: 'italic' as 'italic',
    textAlign: 'center'
  },

  [theme.breakpoints.up('sm')]: {
    root: {
      paddingLeft: 100,
      paddingRight: 100,
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
    const image  = frontmatter!.image!.children![0].responsiveResolution.src as string
    const author = frontmatter!.author!.id!
    const slug = fields!.slug!

    return (
      <article className={classes.root}>
        <PostSEO
          title={title}
          headline={title}
          image={image}
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
          <h1 className={classes.title}>{frontmatter.title}</h1>
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