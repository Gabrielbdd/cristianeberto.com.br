import * as React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'
import {
  Typography,
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Popover,
  Divider,
  withStyles
} from 'material-ui'
import Share from 'material-ui-icons/Share'
import SocialShareList, { SocialMedia } from './SocialShareList'
import { StyledComponent } from 'utils/styledProps'
import { ImageSharpSizes } from 'graphql-types'

const BASE_URL = 'https://cristianeberto.com.br'

const injectStyles = withStyles({
  root: {
    maxWidth: 350,
    margin: '0 auto'
  },

  media: {
    height: 200
  },

  actions: {
    justifyContent: 'space-between'
  }
})

interface IPostProps {
  title: string
  slug: string
  content: string
  sizes: ImageSharpSizes
  alt: string
}

@injectStyles
class Post extends React.Component<IPostProps & StyledComponent> {
  state = {
    anchorEl: undefined as undefined | HTMLElement,
    popoverHover: false
  }

  handleShareButtonClick = ({ target }: any) => {
    this.setState({ anchorEl: this.state.anchorEl ? undefined : target })
  }

  handlePopoverResquestClose = () => {
    this.setState({ anchorEl: undefined })
  }

  render () {
    const { title, slug, content, classes, sizes, alt } = this.props
    const socialMedias: [SocialMedia] = [
      {
        name: 'Facebook',
        shareLink: `https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}${slug}`
      },
      {
        name: 'Twitter',
        shareLink: `https://twitter.com/home?status=${BASE_URL}${slug}`
      },
      {
        name: 'Google+',
        shareLink: `https://plus.google.com/share?url=${BASE_URL}${slug}`
      },
      {
        name: 'WhatsApp',
        shareLink: `https://api.whatsapp.com/send?text=cristianeberto.com${slug}`
      }
    ]
    const { anchorEl } = this.state
    let open = !!anchorEl

    return (
      <Card className={classes.root}>
        <Img sizes={sizes} alt={alt} />
        <CardContent>
          <Typography type="headline" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
        <Divider light />
        <CardActions className={classes.actions}>
          <Button color="accent" onClick={() => navigateTo(slug)}>
            Ler mais
          </Button>
          <IconButton onClick={this.handleShareButtonClick}>
            <Share />
          </IconButton>
          <Popover
            className={classes.popover}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}

            onClose={this.handlePopoverResquestClose}
          >
            <SocialShareList socialMedias={socialMedias} />
          </Popover>
        </CardActions>
      </Card>
    )
  }
}

export default Post