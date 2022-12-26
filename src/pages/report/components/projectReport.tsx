import React, { useMemo } from "react"
import { Box } from "src/UILibrary"

import { ReportPaper } from "./reportPaper"
import { ReportGroup } from "./reportGroup"
import { ChartReports } from "./chartReports"

import { useProjectReports } from "src/hooks/reports"
import { IReport, IGateway } from "src/types/reports"
import { numberToUSDCurrency } from "src/modules/currency"

interface ProjectReportsProps {
  projectName: string
  gateways: IGateway[]
  reports: IReport[]
}

export const ProjectReports: React.FC<ProjectReportsProps> = ({
  projectName,
  gateways,
  reports,
}) => {
  const data = useProjectReports(reports, gateways)
  const total = useMemo(
    () => data.reduce((prev, curr) => (prev * 1000 + curr.total * 1000) / 1000, 0),
    [data]
  )

  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}>
      <Box sx={{ flexGrow: 1, mr: "31px" }}>
        <ReportPaper title={`${projectName} | All gateways`}>
          {data.map(curr => (
            <ReportGroup key={curr.key} group={curr} />
          ))}
        </ReportPaper>
      </Box>
      <Box sx={{ flexShrink: 0, width: "550px" }}>
        <ChartReports data={data} total={total} />
        <ReportPaper title={`PROJECT TOTAL | ${numberToUSDCurrency(total)} USD`} />
      </Box>
    </Box>
  )
}
