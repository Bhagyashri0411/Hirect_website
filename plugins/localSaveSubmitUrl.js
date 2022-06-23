export default ({ app }, inject) => {
  inject('localSaveSubmitUrl', localSaveSubmitUrl)
}

export function localSaveSubmitUrl() {
  const search = window.location.search
  const searchObj = {}

  if (search.length > 0) {
    search.split('?')[1].split('&').forEach((item, index) => {
      const arr = item.split('=')
      searchObj[arr[0]] = arr[1]
    })

    window.localStorage.setItem('submitUrl', window.location.href)
    window.localStorage.setItem('submitUrlSearch', JSON.stringify(searchObj))
    window.localStorage.setItem('hasSubmitUrl', '1')
  } else {
    window.localStorage.removeItem('submitUrl')
    window.localStorage.removeItem('submitUrlSearch')
    window.localStorage.removeItem('hasSubmitUrl')
  }
}