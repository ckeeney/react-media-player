export default (() => {
    if (typeof window == 'undefined') {
        return null
    }
  const names = [
    'exitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen',
    'webkitExitFullscreen'
  ]
  return names.reduce((prev, curr) =>
    document[curr] ? curr : prev
  )
})()
