import * as React from 'react'
import { isEqual } from 'lodash'

const DISQUS_CONFIG = [
  'shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment'
]

let __disqusAdded = false

declare var DISQUS: any

function copyProps(context: any, props: any, prefix = '') {
  Object.keys(props).forEach((prop) => {
    context[prefix + prop] = props[prop]
  })

  if (typeof props.onNewComment === 'function') {
    context[prefix + 'config'] = function config() {
      this.callbacks.onNewComment = [
        function handleNewComment(comment: any) {
          props.onNewComment(comment)
        }
      ]
    }
  }
}

interface IDisqusProps {
  id?: string
  shortname: string
  identifier?: string
  title?: string
  url?: string
  category_id?: string
  onNewComment?: Function
}

class Disqus extends React.Component<IDisqusProps> {
  private disqus: HTMLElement

  addDisqusScript = () => {
    if (__disqusAdded) {
      return
    }

    const child = this.disqus = document.createElement('script')
    const parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]

    child.async = true
    child.type = 'text/javascript'
    child.src = '//' + this.props.shortname + '.disqus.com/embed.js'

    parent.appendChild(child)

    __disqusAdded = true
  }

  loadDisqus = () => {
    interface IProps {
      [index: string]: string
    }

    const props: IProps = {}

    DISQUS_CONFIG.forEach((prop) => {
      if (!!props[prop]) {
        props[prop] = props[prop]
      }
    })

    if (!props.url || !props.url.length) {
      props.url = window.location.href
    }

    if (typeof DISQUS !== 'undefined') {
      DISQUS.reset({
        reload: true,
        config () {
          copyProps(this.page, props)

          this.page.url = this.page.url.replace(/#/, '') + '#!newthread'
        }
      })
    } else {
      copyProps(window, props, 'disqus_')
      this.addDisqusScript()
    }
  }

  componentDidMount () {
    this.loadDisqus()
  }

  shouldComponentUpdate (nextProps: IDisqusProps) {
    return !isEqual(nextProps, this.props)
  }

  componentDidUpdate () {
    this.loadDisqus()
  }

  render () {
    return (
      <div {...this.props}>
        <div id="disqus_thread"/>
        <noscript>
          <span>
            Please enable JavaScript to view the
            <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a>
          </span>
        </noscript>
        <a href="http://disqus.com" className="dsq-brlink">
          Blog comments powered by <span className="logo-disqus">Disqus</span>.
        </a>
      </div>
    )
  }
}

export default Disqus
