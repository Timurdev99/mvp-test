import { useMutation, MutationFunction } from "@tanstack/react-query"

export const useGetMutation = <T extends unknown>(
  mutationFn: MutationFunction<T, any>,
  onSuccess: Function,
  onError: Function
) => {
  return useMutation(mutationFn, {
    onSuccess: res => {
      onSuccess(res)
    },
    onError: err => {
      onError(err)
    },
  })
}
