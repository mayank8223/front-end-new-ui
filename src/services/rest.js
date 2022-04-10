import axios from 'axios'
import { config } from '../config'

const api = axios.create({
  baseURL: config.apiUrl,
  timeout: 20000,
  headers: {}
})

const webApi = axios.create({
  baseURL: config.webUrl,
  timeout: 20000
})

const readApi = axios.create({
  baseURL: config.readAPIUrl,
  timeout: 20000,
  headers: {}
})

export const GET_READ_API = async (url, params = {}) => {
  const response = await readApi.get(url, { params })
  return response
}

export const GET = async (url, params = {}) => {
  const response = await api.get(url, { params })
  return response
}

export const POST = async (url, data) => {
  const response = await api.post(url, data)
  return response
}

export const POST_FILE = async (url, data) => {
  const response = await api.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    timeout: 200000
  })
  return response
}

export const PUT = async (url, data) => {
  const response = await api.put(url, data)
  return response
}

export const DELETE = async (url, data) => {
  const response = await api.delete(url, data)
  return response
}

export const WEB_POST = async (url, data) => {
  const response = await webApi.post(url, data)
  return response
}
