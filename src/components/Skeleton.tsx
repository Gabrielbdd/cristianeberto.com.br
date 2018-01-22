import * as React from 'react'
import { withStyles } from 'material-ui/styles'

import { StyledComponent } from 'utils/styledProps'

const injectStyles = withStyles(theme => ({
  root: {
    height: '100%',

    '& .react-loading-skeleton': {
      /* animation: progress 1.2s ease-in-out infinite; */
      backgroundColor: "#eee",
      backgroundImage: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
      backgroundSize: "200px 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: "4px",
      display: "inline-block",
      lineHeight: "1",
      width: "100%",
      height: '100%',
    },
  },

  '@keyframes progress': {
    '0%': {
        backgroundPosition: "-200px 0",
    },
    '100%': {
        backgroundPosition: 'calc(200px + 100%) 0',
    },
  },
}))

interface IProps {
  count?: number
  duration?: number
}

@injectStyles
class Skeleton extends React.Component<IProps & StyledComponent> {
  static defaultProps = {
    count: 1,
    wrapper: null,
    duration: 1.2
  }

  render() {
    const { count, duration, classes } = this.props

    const elements = []
    for (let i = 0; i < count; i++) {
      elements.push(
        <span
          key={i}
          className="react-loading-skeleton"
          style={{ animation: "progress " + String(duration) + "s ease-in-out infinite" }}
        >
          &zwnj;
        </span>
      )
    }

    // const Wrapper = this.props.wrapper

    return (
      <span className={classes.root}>
        {/* {Wrapper
          ? elements.map((element, i) =>
            <Wrapper key={i}>{element}&zwnj</Wrapper>
          )
          : elements
        } */}
        {elements}
      </span>
    )
  }
}

export default Skeleton