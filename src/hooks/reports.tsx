import { useMemo } from "react"
import orderBy from "lodash/orderBy"
import groupBy from "lodash/groupBy"

import { IReport, IProject, IGateway } from "src/types/reports"

export const useAllReports = (reports: IReport[], projects: IProject[], gateways: IGateway[]) => {
  const groupedProjects: Record<string, IProject> = useMemo(
    () => projects.reduce((prev, curr) => ({ ...prev, [curr.projectId]: curr }), {}),
    [projects]
  )
  const groupedGateways: Record<string, IGateway> = useMemo(
    () => gateways.reduce((prev, curr) => ({ ...prev, [curr.gatewayId]: curr }), {}),
    [gateways]
  )
  const groupedReports = useMemo(
    () =>
      groupBy(
        orderBy(
          reports.map(report => ({
            ...report,
            gatewayName: groupedGateways[report.gatewayId].name,
          })),
          ["created"],
          ["asc"]
        ),
        "projectId"
      ),
    [reports, groupedGateways]
  )

  const result = useMemo(
    () =>
      orderBy(
        Object.keys(groupedReports).map(key => ({
          key: key,
          name: groupedProjects[key].name,
          total: groupedReports[key].reduce(
            (prev, curr) => (prev * 1000 + curr.amount * 1000) / 1000,
            0
          ),
          data: groupedReports[key],
        })),
        ["name"],
        ["asc"]
      ),
    [groupedReports, groupedProjects]
  )
  return result
}

export const useProjectReports = (reports: IReport[], gateways: IGateway[]) => {
  const groupedGateways: Record<string, IGateway> = useMemo(
    () => gateways.reduce((prev, curr) => ({ ...prev, [curr.gatewayId]: curr }), {}),
    [gateways]
  )
  const groupedReports = useMemo(
    () =>
      groupBy(
        orderBy(
          reports.map(report => ({
            ...report,
            gatewayName: groupedGateways[report.gatewayId].name,
          })),
          ["created"],
          ["asc"]
        ),
        "gatewayId"
      ),
    [reports, groupedGateways]
  )

  const result = useMemo(
    () =>
      orderBy(
        Object.keys(groupedReports).map(key => ({
          key: key,
          name: groupedGateways[key].name,
          total: groupedReports[key].reduce(
            (prev, curr) => (prev * 1000 + curr.amount * 1000) / 1000,
            0
          ),
          data: groupedReports[key],
        })),
        ["name"],
        ["asc"]
      ),
    [groupedReports, groupedGateways]
  )
  return result
}

export const useGatewayReports = (reports: IReport[], projects: IProject[]) => {
  const groupedProjects: Record<string, IProject> = useMemo(
    () => projects.reduce((prev, curr) => ({ ...prev, [curr.projectId]: curr }), {}),
    [projects]
  )
  const groupedReports = useMemo(
    () =>
      groupBy(
        orderBy(
          reports.map(report => ({
            ...report,
            gatewayName: "",
          })),
          ["created"],
          ["asc"]
        ),
        "projectId"
      ),
    [reports]
  )

  const result = useMemo(
    () =>
      orderBy(
        Object.keys(groupedReports).map(key => ({
          key: key,
          name: groupedProjects[key].name,
          total: groupedReports[key].reduce(
            (prev, curr) => (prev * 1000 + curr.amount * 1000) / 1000,
            0
          ),
          data: groupedReports[key],
        })),
        ["name"],
        ["asc"]
      ),
    [groupedReports, groupedProjects]
  )
  return result
}
