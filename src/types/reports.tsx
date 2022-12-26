export interface IProject {
  projectId: string
  userIds: string[]
  rule: string
  gatewayIds: string[]
  structure: string
  industry: string
  website: string
  description: string
  image: string
  name: string
}

export interface IProjectsResult {
  code: string
  data: IProject[]
  error: string | null
}

export interface IGateway {
  gatewayId: string
  userIds: string[]
  name: string
  type: string
  apiKey: string
  secondaryApiKey: string
  description: string
}

export interface IGatewaysResult {
  code: string
  data: IGateway[]
  error: string | null
}

export interface IReportInputs {
  from: string
  to: string
  projectId: string
  gatewayId: string
}

export interface IReport {
  paymentId: string
  amount: number
  projectId: string
  gatewayId: string
  userIds: string[]
  modified: string
  created: string
}

export interface IReportsResult {
  code: string
  data: IReport[]
  error: string | null
}

export interface IReportGroup {
  key: string
  name: string
  total: number
  data: (IReport & { gatewayName: string })[]
}

export interface IRowData {
  date: string
  gateway: string
  transactionId: string
  amount: string
}
