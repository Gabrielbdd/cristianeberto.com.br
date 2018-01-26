import * as React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import Facebook     = require('react-icons/lib/fa/facebook')
import FaTwitter    = require('react-icons/lib/fa/twitter')
import FaGooglePlus = require('react-icons/lib/fa/google-plus')
import FaWhatsapp   = require('react-icons/lib/fa/whatsapp')
import { StyledComponent } from 'utils/styledProps'

const styles = {
  root: {
    '& .icon': {
      padding: 8,
      width: 35,
      height: 35,
      borderRadius: 90,
      color: 'white',

      '&.facebook': {
        backgroundColor: '#3b5998'
      },
    
      '&.twitter': {
        backgroundColor: '#55acee'
      },
    
      '&.google-plus': {
        backgroundColor: '#d62d20'
      },
    
      '&.whatsapp': {
        backgroundColor: '#25D366'
      },
    },
  },
}

export type SocialMedia = {
  name: 'Facebook' | 'Twitter' | 'Google+' | 'WhatsApp'
  shareLink: string
}

interface IProps {
  socialMedias: [SocialMedia]
}

const socialMediaIcons = {
  Facebook:  () => <FaFacebook className="facebook"/>,
  Twitter:   () => <FaTwitter className="twitter" />,
  'Google+': () => <FaGooglePlus className="google-plus" />,
  WhatsApp:  () => <FaWhatsapp className="whatsapp" />
}

const SocialShareList = ({ classes, socialMedias }: IProps & StyledComponent) => (
  <List className={classes.root}>
    {socialMedias.map(({ name, shareLink }, index) => (
      <ListItem
        key={name}
        onClick={() => open(shareLink, '_blank')}
        button
        divider={index !== socialMedias.length - 1}
      >
        <ListItemIcon className="icon">
          {socialMediaIcons[name]()}
        </ListItemIcon>

        <ListItemText primary={name} />
      </ListItem>
    ))}
  </List>
)

export default withStyles(styles)(SocialShareList)