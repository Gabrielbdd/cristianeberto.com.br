import * as NProgress from 'nprogress'

const autoIncrement = (() => {
  let _timeoutID
  let _isRunning = false

  return {
    run () {
      _isRunning = true
      _timeoutID = setTimeout(() => {
        if (NProgress.isStarted()) {
          NProgress.inc(Math.random() * 0.022)
          autoIncrement.run()
        } else {
          _isRunning = false
        }
      }, 250)
    },

    stop () {
      window.clearTimeout(_timeoutID)
    },

    get isRunning () {
      return _isRunning
    }
  }
})()

export const onInitialClientRender = () => {
  const navigateTo = window.___navigateTo

  window.___navigateTo = path => {
    if (NProgress.isStarted() && autoIncrement.isRunning) {
      NProgress.remove()
      autoIncrement.stop()
    }

    NProgress.start()
    autoIncrement.run()

    navigateTo(path)
  }
}

export const onRouteUpdate = () => {
  if (NProgress.isStarted()) {
    NProgress.done()
  }
}