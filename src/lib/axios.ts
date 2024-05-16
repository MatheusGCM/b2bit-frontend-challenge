import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;version=v1_web',
  },
})

api.interceptors.request.use(
  (config) => {
    const storedAccessToken = localStorage.getItem('@b2bit:access-token')

    if (storedAccessToken) {
      config.headers.Authorization = `Bearer ${storedAccessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
