import * as React from 'react'
import { Avatar } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import { AuthorJson, ImageSharp } from 'graphql-types'

const injectStyles = withStyles(theme => ({
  root: {
    display: 'flex',
    padding: '15px 0',

    '& p': {
      margin: '0px !important'
    }
  },

  avatar: {
    width: '48px',
    height: '48px',
    marginRight: '10px'
  },

  description: {
    margin: '0',
    fontSize: '15px !important'
  },

  id: {
    margin: '0 !important',
    fontSize: '24px !important'
  },

  [theme.breakpoints.up('sm')]: {
    avatar: {
      width: '114px',
      height: '114px'
    }
  }
}))

interface IProps {
  author: AuthorJson
}

const Author = injectStyles<IProps>(({ author, classes }) => {
  const avatar = author!.avatar!.children![0] as ImageSharp

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={avatar.responsiveResolution!.src!}
        srcSet={avatar.responsiveResolution!.srcSet!}
      />
      <div>
        <p className={classes.id}>{author.id}</p>
        <p className={classes.description}>{author.bio}</p>
      </div>
    </div>
  )
})

export default Author