import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://1c717udvr5.execute-api.ap-south-1.amazonaws.com',
  // baseURL: 'https://vjadz4xv03.execute-api.ap-south-1.amazonaws.com',
  withCredentials: false,
  timeout: 30000
})

instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'X-region': 'us',
      'X-AppVersion': '1.0.0',
      'X-AppVersionCode': 1,
      'X-OS': 'web'
    }
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    console.error(error);
  }
)
export default ({ app,  }, inject) => {
  if (app.$config.ENV === 'test') {
    instance.defaults.baseURL = 'https://vjadz4xv03.execute-api.ap-south-1.amazonaws.com'
  }
  inject('reqPost', reqPost)
  inject('reqGet', reqGet)
  inject('reqPut', reqPut)
}

export function reqPost(url, data, config = {}) {
  return instance.post(url, data, config)
}
export function reqGet(url, data, config = {}) {
  return instance.get(url, data, config)
}
export function reqPut(url, data, config = {}) {
  return instance.put(url, {
    params,
    ...config
  })
}
