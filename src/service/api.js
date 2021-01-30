import axios from 'axios'

const { REACT_APP_API_URL = '' } = process.env

export const API = axios.create({
  baseURL: REACT_APP_API_URL
})

export const fetcher = (url, configs) =>
  API.get(url, configs).then(res => res.data)

export const postAnswer = async (accountId, questionId, answer) => {
  const datetime = _resolveDateTime()

  await API.post(`/v1/answer/${accountId}/${questionId}`, {
    datetime,
    answer
  })
}

export const postAccount = async name => {
  const { data } = await API.post('/v1/person', {
    name
  })

  return data
}

const _resolveDateTime = () => {
  const date = new Date()

  const year = date.getFullYear().toString().padStart(4, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}
