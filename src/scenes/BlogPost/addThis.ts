const AddThis = (() => {
  let loaded = false

  return {
    load () {
      const addThisScript = document.createElement('script')
    
      addThisScript.type  = 'text/javascript'
      addThisScript.src   = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a1956d954700cf5'
      addThisScript.async = true
    
      document.body.appendChild(addThisScript)

      loaded = true
    }
  }
})()

export default AddThis