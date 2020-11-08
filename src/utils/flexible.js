; (function (doc, win, designWidth) {
  const html = doc.documentElement
  const refreshDom = () => {
      const clientWidth = html.clientWidth
      if(clientWidth >= designWidth){
          html.style.fontSize = "100px"
      }else{
          html.style.fontSize = 100 * (clientWidth / designWidth) + 'px'
      }
  }
  doc.addEventListener('DOMContentLoaded', refreshDom)
})(document, window, 750)