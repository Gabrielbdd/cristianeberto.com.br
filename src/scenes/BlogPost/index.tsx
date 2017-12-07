import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Divider } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  Theme,

  withStyles
} from 'material-ui/styles'

import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection } from '../../graphql-types'

import translateDate from '../../utils/translateDate'
import returnType from '../../utils/returnType'
import Disqus from '../../components/Disqus'
import ReadingProgressBar from './components/ReadingProgressBar'
import Author from './components/Author'

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: '1000px',
    padding: '10px 20px',
    margin: '0 auto',
    color: theme.palette.text.primary,
    
    '& article p': {
      fontSize: '1.1em',
      letterSpacing: '.01em',
      lineHeight: '1.45em'
    }
  },

  title: {
    marginBottom: '30px',
    textAlign: 'center',
    color: theme.palette.primary[500],
    fontSize: '1.5em',

    '&::after': {
      content: `''`,
      height: '2px',
      width: '50px',
      background: theme.palette.primary[500],
      display: 'block',
      margin: '20px auto 0'
    }
  },

  date: {
    fontSize: '13px !important',
    fontStyle: 'italic',
    textAlign: 'center'
  },

  [theme.breakpoints.up('sm')]: {
    root: {
      paddingLeft: '140px',
      paddingRight: '140px'
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      paddingLeft: '180px',
      paddingRight: '180px'
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends WithStyles<keyof typeof stylesType> {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
  }
}

class BlogPost extends React.Component<IProps> {
  render () {
    const { html, frontmatter, fields } = this.props.data.post
    const { classes } = this.props
  
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`${frontmatter.title} | Blog`}</title>
        </Helmet>
        <article>
          <ReadingProgressBar>
            <h1 className={classes.title}>{frontmatter.title}</h1>
            <p className={classes.date}>Atualizado em {translateDate(frontmatter.updatedDate)}</p>
            <section dangerouslySetInnerHTML={{ __html: html as string }} />
            <p className={classes.date}>Publicado em {translateDate(frontmatter.createdDate)}</p>
          </ReadingProgressBar>
        </article>

        <Divider />
          <Author author={frontmatter.author} />
        <Divider />

        <Disqus
          shortname="cristiane-berto"
          identifier={frontmatter.title}
          title={frontmatter.title}
          url={`http://cristianeberto.com.br${fields.slug}`}
        />
      </div>
    )
  }
}

export default withStyles(styles)(BlogPost)