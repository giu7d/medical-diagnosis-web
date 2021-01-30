import useSWR from 'swr'
import { fetcher } from '../service/api'

export const useResults = id => {
  const { data, error, mutate } = useSWR(
    `/v1/rank_disease?person_id=${id}`,
    fetcher
  )

  return {
    data: data?.value || [],
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
