import * as React from 'react'
import { LinearProgress } from 'material-ui'
import {
  StyleRules,
  StyledComponentProps,
  WithStyles,

  withStyles
} from 'material-ui/styles'

const styles: StyleRules = {
  root: {
    top: 0,
    position: 'sticky',
    height: '5px',
    width: '100%'
  }
}

interface IProps extends StyledComponentProps<keyof typeof styles> {}

interface IState {
  readingProgress: number
}

class ReadingProgressBar extends React.Component<IProps & WithStyles, IState> {
  private $container: HTMLElement | null = null

  state: IState = {
    readingProgress: 0
  }

  updateReadingProgress = () => {
    const { top, height } = this.$container.getBoundingClientRect()
    const newReadingProrgess = (window.pageYOffset - top) / height * 50

    this.setState({ readingProgress: newReadingProrgess })
  }

  handleWindowResize = () => {
    this.updateReadingProgress()
  }

  handleWindowScroll = () => {
    this.updateReadingProgress()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleWindowScroll)
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleWindowScroll)
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render () {
    let visibility = 'hidden' 

    if (this.$container) {
      const { top, height } = this.$container.getBoundingClientRect()

      if ((height + 50 >= window.pageYOffset) && (top + 85 <= window.pageYOffset)) {
        visibility = 'visible'
      }
    }

    return (
      <section
        ref={($container) => this.$container = $container}
      >
        <LinearProgress
          className={this.props.classes.root}
          style={{ visibility }}
          value={this.state.readingProgress}
          mode="determinate"
        />
          
        {this.props.children}
      </section>
    )
  }
}

export default withStyles(styles)(ReadingProgressBar)