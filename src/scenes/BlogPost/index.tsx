import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Divider } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { StyledComponent } from 'utils/styledProps'
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection } from 'graphql-types'

import translateDate from '../../utils/translateDate'
import Disqus from '../../components/Disqus'
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
class BlogPost extends React.Component<IProps & StyledComponent> {
  render () {
    const { html, frontmatter, fields } = this.props.data.post
    const { classes } = this.props
  
    return (
      <article className={classes.root}>
        <Helmet>
          <title>{`${frontmatter.title} | Blog`}</title>
        </Helmet>

        <ReadingProgressBar>
          <h1 className={classes.title}>{frontmatter.title}</h1>
          <p className={classes.date}>Atualizado em {translateDate(frontmatter.updatedDate)}</p>
          <section dangerouslySetInnerHTML={{ __html: html as string }} />
          <p className={classes.date}>Publicado em {translateDate(frontmatter.createdDate)}</p>
        </ReadingProgressBar>

        <Divider />

        <Author author={frontmatter.author} />

        <Divider />

        <Disqus
          shortname="cristiane-berto"
          identifier={frontmatter.title}
          title={frontmatter.title}
          url={`http://cristianeberto.com.br${fields.slug}`}
        />
      </article>
    )
  }
}

export default BlogPost