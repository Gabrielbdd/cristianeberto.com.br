import * as React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { Icon } from 'material-ui'
import {
  StyleRules,
  StyledComponentProps,
  WithStyles,

  withStyles
} from 'material-ui/styles'

import SocialIcon from '../../../../components/SocialIcon'

const styles: StyleRules = {
  icon: {
    padding: '10px',
    borderradius: '90px',
    color: 'white'
  },

  facebook: {
    backgroundColor: '#3b5998'
  },

  twitter: {
    backgroundColor: '#55acee'
  },

  google: {
    backgroundColor: '#d62d20'
  },

  whatsapp: {
    backgroundColor: '#25D366'
  }
}

export type SocialMedia = {
  name: string
  shareLink: string
}

interface IProps extends StyledComponentProps {
  socialMedias: [SocialMedia]
}

const SocialShareList = ({ classes, socialMedias }: IProps & WithStyles) => (
  <List>
    {socialMedias.map(({ name, shareLink }, index) => (
      <ListItem
        key={name}
        onClick={() => open(shareLink, '_blank')}
        button
        divider={index !== socialMedias.length - 1}
      >
        <ListItemIcon>
          <SocialIcon type={name} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    ))}
  </List>
)

export default withStyles(styles)(SocialShareList)