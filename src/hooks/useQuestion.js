import useSWR from 'swr'
import { fetcher } from '../service/api'

export const useQuestion = id => {
  const { data, error } = useSWR(
    `/v1/get_next_question?person_id=${id}`,
    fetcher
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
