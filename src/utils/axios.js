import axios from 'axios'
import Config from '../config/config'

const instance = axios.create({
  baseURL: Config.apiUrl,
  timeout: Config.timeout
})

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err.response)
})

export default instance
