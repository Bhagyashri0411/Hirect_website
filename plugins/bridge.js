export default ({ app }, inject) => {
  inject('callhandler', callhandler)
  inject('registerhandler', registerhandler)
}
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  let WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
export function callhandler (name, data, callback) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.callHandler(name, data, callback)
  })
}
export function registerhandler (name, callback) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.registerHandler(name, function (data, responseCallback) {
      callback(data, responseCallback)
    })
  })
}