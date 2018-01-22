import * as React from 'react'
import ReactSlick from 'react-slick'

interface IProps {
  onLoad?: Function
  arrows?: boolean
  infinite?: boolean
  autoplay?: boolean
  autoplaySpeed?: number
  dots?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  className?: string
  responsive?: any
}

class Slider extends React.Component<IProps> {
  slider: HTMLDivElement

  componentDidMount () {
    const { onLoad } = this.props

    if (onLoad) {
      if (typeof MutationObserver === 'function') {
        const checkSlickTrack = (onFound: ($slickTrack: Element) => any, onNotFound?: Function) => {
          let $slickTrack = this.slider.querySelector(`.slick-track`)
    
          if ($slickTrack) {
            onFound($slickTrack)
          } else {
            onNotFound && onNotFound()
          }
        }
    
        function checkStyle ($element: Element, onFound: Function, onNotFound?: Function) {
          if ($element.getAttribute('style') != '') {
            onFound($element)
          } else {
            onNotFound && onNotFound()
          }
        }
    
        function observeAttributesChange ($element: Element, cb: (off: () => void) => any) {
          const observer = new MutationObserver(() => {
            cb(observer.disconnect)
          })
    
          observer.observe($element, { attributes: true })
        }
    
        const onSlickTrackRender = ($slickTrack: Element) => {
          checkStyle(
            $slickTrack,
            onLoad,
            () => observeAttributesChange($slickTrack, off => {
              checkStyle($slickTrack, () => {
                off()
                onLoad()
              })
            })
          )
        }
    
        checkSlickTrack(
          onSlickTrackRender,
          () => {
            const observer = new MutationObserver(() => {
              checkSlickTrack($slickTrack => {
                observer.disconnect()
                onSlickTrackRender($slickTrack)
              })
            })
      
            observer.observe(this.slider, { childList: true, subtree: true })
          }
        )
      } else {
        onLoad()
      }
    }
  }

  render () {
    const { children, ...rest } = this.props  

    return (
      <div ref={slider => this.slider = slider!}>
        <ReactSlick {...rest}>
          {children}
        </ReactSlick>
      </div>
    )
  }
}

export default Slider