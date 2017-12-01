import * as React from 'react'
import { Avatar } from 'material-ui'
import { withStyles, StyleRules, Theme, StyledComponentProps } from 'material-ui/styles'

import { AuthorJson, ImageSharp } from '../../graphql-types'
import returnType from '../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    padding: '15px 0'
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
    margin: '0',
    fontSize: '24px !important'
  },

  [theme.breakpoints.up('sm')]: {
    avatar: {
      width: '114px',
      height: '114px'
    }
  }
})

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  author: AuthorJson
}

const Author = ({ author, classes }: IProps) => {
  const avatar = author.avatar.children[0] as ImageSharp

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={avatar.responsiveResolution.src}
        srcSet={avatar.responsiveResolution.srcSet}
      />
      <div>
        <p className={classes.id}>{author.id}</p>
        <p className={classes.description}>{author.bio}</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(Author)