import React, { useMemo } from "react"
import { Box } from "src/UILibrary"

import { ReportPaper } from "./reportPaper"
import { ReportGroup } from "./reportGroup"
import { ChartReports } from "./chartReports"

import { useGatewayReports } from "src/hooks/reports"
import { IReport, IProject } from "src/types/reports"
import { numberToUSDCurrency } from "src/modules/currency"

interface GatewayReportsProps {
  projects: IProject[]
  gatewayName: string
  reports: IReport[]
}

export const GatewayReports: React.FC<GatewayReportsProps> = ({
  projects,
  gatewayName,
  reports,
}) => {
  const data = useGatewayReports(reports, projects)
  const total = useMemo(
    () => data.reduce((prev, curr) => (prev * 1000 + curr.total * 1000) / 1000, 0),
    [data]
  )

  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}>
      <Box sx={{ flexGrow: 1, mr: "31px" }}>
        <ReportPaper title={`All projects | ${gatewayName}`}>
          {data.map(curr => (
            <ReportGroup key={curr.key} group={curr} />
          ))}
        </ReportPaper>
      </Box>
      <Box sx={{ flexShrink: 0, width: "550px" }}>
        <ChartReports data={data} total={total} />
        <ReportPaper title={`GATEWAY TOTAL | ${numberToUSDCurrency(total)} USD`} />
      </Box>
    </Box>
  )
}
