export function load () {
  var fc_CSS =document.createElement('link')
  
  fc_CSS.setAttribute('rel','stylesheet')
  
  var fc_isSecured = (window.location && window.location.protocol == 'https:')
  var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang')
  var fc_rtlLanguages = ['ar', 'he']
  var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? '-rtl' : ''

  fc_CSS.setAttribute('type','text/css')
  fc_CSS.setAttribute('href',((fc_isSecured)
    ? 'https://d36mpcpuzc4ztk.cloudfront.net'
    : 'http://assets1.chat.freshdesk.com') + '/css/visitor' + fc_rtlSuffix + '.css')

  document.getElementsByTagName('head')[0].appendChild(fc_CSS)

  var fc_JS = document.createElement('script')

  fc_JS.type = 'text/javascript'
  fc_JS.defer = true
  fc_JS.src = ((fc_isSecured)
    ?'https://d36mpcpuzc4ztk.cloudfront.net'
    :'http://assets.chat.freshdesk.com') + '/js/visitor.js'

  ;(document.body
    ? document.body
    : document.getElementsByTagName('head')[0]).appendChild(fc_JS)
      
    ;(window as any).livechat_setting = 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJjcmlzdGlhbmViZXJ0by5mcmVzaGRlc2suY29tIiwicHJvZHVjdF9pZCI6bnVsbCwibmFtZSI6IkNyaXN0aWFuZSBCZXJ0byIsIndpZGdldF9leHRlcm5hbF9pZCI6bnVsbCwid2lkZ2V0X2lkIjoiM2Y4ZjQ4ZjItNmRmNS00NDdiLTgzOGEtYjJmMWRlNWRlMDZjIiwic2hvd19vbl9wb3J0YWwiOmZhbHNlLCJwb3J0YWxfbG9naW5fcmVxdWlyZWQiOmZhbHNlLCJsYW5ndWFnZSI6ImVuIiwidGltZXpvbmUiOiJNaWQtQXRsYW50aWMiLCJpZCI6MzUwMDAwNTIwNzMsIm1haW5fd2lkZ2V0IjoxLCJmY19pZCI6ImIzODdjYTUzY2QxMzU2ZDkzZGQxYmNlMzlkYjliMzFhIiwic2hvdyI6MSwicmVxdWlyZWQiOjIsImhlbHBkZXNrbmFtZSI6IkNyaXN0aWFuZSBCZXJ0byIsIm5hbWVfbGFiZWwiOiJOYW1lIiwibWVzc2FnZV9sYWJlbCI6Ik1lc3NhZ2UiLCJwaG9uZV9sYWJlbCI6IlBob25lIiwidGV4dGZpZWxkX2xhYmVsIjoiVGV4dGZpZWxkIiwiZHJvcGRvd25fbGFiZWwiOiJEcm9wZG93biIsIndlYnVybCI6ImNyaXN0aWFuZWJlcnRvLmZyZXNoZGVzay5jb20iLCJub2RldXJsIjoiY2hhdC5mcmVzaGRlc2suY29tIiwiZGVidWciOjEsIm1lIjoiTWUiLCJleHBpcnkiOjE1MTQ1OTIxMTcwMDAsImVudmlyb25tZW50IjoicHJvZHVjdGlvbiIsImVuZF9jaGF0X3RoYW5rX21zZyI6IlRoYW5rIHlvdSEhISIsImVuZF9jaGF0X2VuZF90aXRsZSI6IkVuZCIsImVuZF9jaGF0X2NhbmNlbF90aXRsZSI6IkNhbmNlbCIsInNpdGVfaWQiOiJiMzg3Y2E1M2NkMTM1NmQ5M2RkMWJjZTM5ZGI5YjMxYSIsImFjdGl2ZSI6MSwicm91dGluZyI6bnVsbCwicHJlY2hhdF9mb3JtIjoxLCJidXNpbmVzc19jYWxlbmRhciI6bnVsbCwicHJvYWN0aXZlX2NoYXQiOjAsInByb2FjdGl2ZV90aW1lIjpudWxsLCJzaXRlX3VybCI6ImNyaXN0aWFuZWJlcnRvLmZyZXNoZGVzay5jb20iLCJleHRlcm5hbF9pZCI6bnVsbCwiZGVsZXRlZCI6MCwibW9iaWxlIjoxLCJhY2NvdW50X2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxNy0xMS0zMFQwMDowMjozOS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTctMTEtMzBUMDA6MDg6MTAuMDAwWiIsImNiRGVmYXVsdE1lc3NhZ2VzIjp7ImNvYnJvd3Npbmdfc3RhcnRfbXNnIjoiWW91ciBzY3JlZW5zaGFyZSBzZXNzaW9uIGhhcyBzdGFydGVkIiwiY29icm93c2luZ19zdG9wX21zZyI6IllvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIGhhcyBlbmRlZCIsImNvYnJvd3NpbmdfZGVueV9tc2ciOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19hZ2VudF9idXN5IjoiQWdlbnQgaXMgaW4gc2NyZWVuIHNoYXJlIHNlc3Npb24gd2l0aCBjdXN0b21lciIsImNvYnJvd3Npbmdfdmlld2luZ19zY3JlZW4iOiJZb3UgYXJlIHZpZXdpbmcgdGhlIHZpc2l0b3LigJlzIHNjcmVlbiIsImNvYnJvd3NpbmdfY29udHJvbGxpbmdfc2NyZWVuIjoiWW91IGhhdmUgYWNjZXNzIHRvIHZpc2l0b3LigJlzIHNjcmVlbi4iLCJjb2Jyb3dzaW5nX3JlcXVlc3RfY29udHJvbCI6IlJlcXVlc3QgdmlzaXRvciBmb3Igc2NyZWVuIGFjY2VzcyAiLCJjb2Jyb3dzaW5nX2dpdmVfdmlzaXRvcl9jb250cm9sIjoiR2l2ZSBhY2Nlc3MgYmFjayB0byB2aXNpdG9yICIsImNvYnJvd3Npbmdfc3RvcF9yZXF1ZXN0IjoiRW5kIHlvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uICIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sX3JlamVjdGVkIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCAiLCJjb2Jyb3dzaW5nX2NhbmNlbF92aXNpdG9yX21zZyI6IlNjcmVlbnNoYXJpbmcgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxlICIsImNvYnJvd3NpbmdfYWdlbnRfcmVxdWVzdF9jb250cm9sIjoiQWdlbnQgaXMgcmVxdWVzdGluZyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIiwiY2Jfdmlld2luZ19zY3JlZW5fdmkiOiJBZ2VudCBjYW4gdmlldyB5b3VyIHNjcmVlbiAiLCJjYl9jb250cm9sbGluZ19zY3JlZW5fdmkiOiJBZ2VudCBoYXMgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICIsImNiX3ZpZXdfbW9kZV9zdWJ0ZXh0IjoiWW91ciBhY2Nlc3MgdG8gdGhlIHNjcmVlbiBoYXMgYmVlbiB3aXRoZHJhd24gIiwiY2JfZ2l2ZV9jb250cm9sX3ZpIjoiQWxsb3cgYWdlbnQgdG8gYWNjZXNzIHlvdXIgc2NyZWVuICIsImNiX3Zpc2l0b3Jfc2Vzc2lvbl9yZXF1ZXN0IjoiQWdlbnQgc2Vla3MgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICJ9fQ=='
}

export function init () {
  (window as any).fcSettings = {
    token: "97e1d461-16ec-44fb-8d56-c093f272b6fe",
    host: "https://wchat.freshchat.com"
  }

  const freshChatBootstrap = document.createElement('script')

  freshChatBootstrap.async = true
  freshChatBootstrap.src   = 'https://wchat.freshchat.com/js/widget.js'

  document.body.appendChild(freshChatBootstrap)
}