import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"

import { getApiClient } from "src/modules/axios"
import { useGetMutation } from "src/modules/mutation"
import { IProjectsResult, IGatewaysResult, IReportInputs } from "src/types/reports"

const getAllProjects = () => {
  return getApiClient().get("/projects")
}

export const useGetAllProjects = () => {
  return useQuery<AxiosResponse<IProjectsResult>, AxiosError>(["projects"], () => getAllProjects())
}

const getAllGateways = () => {
  return getApiClient().get("/gateways")
}

export const useGetAllGateways = () => {
  return useQuery<AxiosResponse<IGatewaysResult>, AxiosError>(["gateways"], () => getAllGateways())
}

const getReports = (data: IReportInputs) => {
  return getApiClient().post("/report", data)
}

export const useGetReports = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function
  onError: Function
}) => {
  return useGetMutation(getReports, onSuccess, onError)
}
