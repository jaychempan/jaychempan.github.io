;(function(mod){
function collectLinks() {
  return Array.prototype.slice.apply(
    document.head.querySelectorAll('link[rel*="icon"]')
  )
}

// function applyLink(source, target) {
//   target.setAttribute('type', source.getAttribute('type'))
//   target.setAttribute('href', source.getAttribute('href'))
// }

function applyLink(source, current) {
  const newLink = document.createElement('link')
  newLink.setAttribute('rel', 'icon')
  newLink.setAttribute('type', source.getAttribute('type'))

  // 添加时间戳以避免缓存（强制刷新动画）
  const baseHref = source.getAttribute('href')
  const hrefWithTimestamp = baseHref + '?t=' + new Date().getTime()
  newLink.setAttribute('href', hrefWithTimestamp)

  if (current.parentNode) {
    current.parentNode.replaceChild(newLink, current)
  }

  return newLink
}

// eslint-disable-next-line no-unused-vars
function initSwitcher(delay) {
  // Exit if media queries aren't supported
  if (typeof window.matchMedia !== 'function') {
    return function noop() {}
  }

  var links = collectLinks()
  var current = document.createElement('link')
  var prevMatch

  current.setAttribute('rel', 'shortcut icon')
  document.head.appendChild(current)

  function faviconApplyLoop() {
    var matched

    links.forEach(function(link) {
      if (window.matchMedia(link.media).matches) {
        matched = link
      }
    })

    if (! matched) {
      return
    }

    if (matched.media !== prevMatch) {
      prevMatch = matched.media
      applyLink(matched, current)
    }
  }

  var intervalId = setInterval(faviconApplyLoop, delay || 300)

  function unsubscribe() {
    clearInterval(intervalId)
    links.forEach(function(link) {
      document.head.appendChild(link)
    })
  }

  faviconApplyLoop()
  links.forEach(function(link) {
    document.head.removeChild(link)
  })

  return unsubscribe
}

initSwitcher()
})()

