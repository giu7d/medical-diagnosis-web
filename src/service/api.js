import axios from 'axios'

const { REACT_APP_API_URL = '' } = process.env

export const API = axios.create({
  baseURL: REACT_APP_API_URL
})

export const fetcher = (url, configs) =>
  API.get(url, configs).then(res => res.data)
