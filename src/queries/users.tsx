import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"

import { getApiClient } from "src/modules/axios"
import { IUsersResult } from "src/types/users"

const getAllUsers = () => {
  return getApiClient().get("/users")
}

export const useGetAllUsers = () => {
  return useQuery<AxiosResponse<IUsersResult>, AxiosError>(["users"], () => getAllUsers())
}
