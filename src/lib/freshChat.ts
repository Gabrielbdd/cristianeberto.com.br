export function load () {
  if (typeof window != 'undefined') {
    window.fcSettings = {
      token: "97e1d461-16ec-44fb-8d56-c093f272b6fe",
      host: "https://wchat.freshchat.com",
      config: {
        content: {
          placeholders: {
            reply_field: 'Digite aqui ...'
          },
  
          actions: {
            push_notify_yes: 'Sim',
            push_notify_no: 'Não'
          },
  
          headers: {
            push_notification: 'Não perca as nossas respostas, nos deixe te notificar assim que respondermos :D'
          }
        }
      }
    }
  
    const freshChatBootstrap = document.createElement('script')
  
    freshChatBootstrap.async = true
    freshChatBootstrap.src   = 'https://wchat.freshchat.com/js/widget.js'
  
    document.body.appendChild(freshChatBootstrap)
  }

  return null
}