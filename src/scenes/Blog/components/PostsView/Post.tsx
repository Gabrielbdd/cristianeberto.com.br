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
  Chip,
  withStyles,
} from 'material-ui'
import Share from 'material-ui-icons/Share'
import SocialShareList, { SocialMedia } from './SocialShareList'
import { StyledComponent } from 'utils/styledProps'
import { ImageSharpSizes } from 'graphql-types'

const BASE_URL = 'https://cristianeberto.com.br'

const injectStyles = withStyles(theme => ({
  root: {
    maxWidth: 360,
    margin: '0 auto'
  },

  media: {
    height: 200
  },

  actions: {
    justifyContent: 'space-between' as 'space-between'
  },

  tags: {
    marginTop: 16,
  },

  tag: {
    marginRight: theme.spacing.unit / 2,

    '&:last-child': {
      marginRight: 0,
    },
  }
}))

interface IPostProps {
  slug: string
  title: string
  content: string
  image: {
    sizes: ImageSharpSizes
    alt: string
  }
  tags: string[]
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
    const { title, slug, content, classes, image, tags } = this.props
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
        <Img sizes={image.sizes} alt={image.alt} />

        <CardContent>
          <Typography type="headline" component="h2" gutterBottom>
            {title}
          </Typography>

          <Typography component="p">
            {content}
          </Typography>

          <div className={classes.tags}>
            {tags.map(tag => 
              <Chip
                key={tag}
                label={tag}
                className={classes.tag}
                onClick={() => navigateTo(`/blog/tags/${tag}`)}
              />
            )}
          </div>
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