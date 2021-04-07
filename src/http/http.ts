import axios from 'axios'
import { config as httpConfig } from '../config'

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/'
})

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: httpConfig.apiKey
  }
  return config
})

export const http = instance
