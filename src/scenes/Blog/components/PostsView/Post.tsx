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
  CardMedia,
  Divider
} from 'material-ui'
import {
  StyleRules,
  StyledComponentProps,

  withStyles
} from 'material-ui/styles'
import { Share } from 'material-ui-icons'

import { ImageSharpSizes, ImageSharpResolutions } from '../../../../graphql-types'

const styles: StyleRules = {
  root: {
    maxWidth: 345
  },

  media: {
    height: 200
  },

  actions: {
    justifyContent: 'space-between'
  }
}

interface IPostProps extends StyledComponentProps {
  title: string
  slug: string
  content: string
  resolutions: ImageSharpResolutions
  sizes: ImageSharpSizes
}

const Post = ({ title, slug, content, classes, resolutions, sizes }: IPostProps) => {
  return (
    <Card className={classes && classes.root}>
      {/*<CardMedia image={resolutions.src as string}>
      </CardMedia>*/}
      <Img sizes={sizes} resolutions={resolutions} />
      <CardContent>
        <Typography type="headline" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography component="p">
          {content}
        </Typography>
      </CardContent>
      <Divider light />
      <CardActions className={classes && classes.actions}>
        <Button color="accent" onClick={() => navigateTo(slug)}>
          Ler mais
        </Button>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Post)