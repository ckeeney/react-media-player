export default (() => {
    if (typeof window == 'undefined') {
        return null
    }
  const names = [
    'requestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen',
    'webkitRequestFullscreen'
  ]
  return names.reduce((prev, curr) =>
    document.documentElement[curr] ? curr : prev
  )
})()
