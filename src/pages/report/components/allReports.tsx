import React, { useMemo } from "react"
import { Box } from "src/UILibrary"

import { ReportPaper } from "./reportPaper"
import { ReportGroup } from "./reportGroup"

import { useAllReports } from "src/hooks/reports"
import { IReport, IProject, IGateway } from "src/types/reports"
import { numberToUSDCurrency } from "src/modules/currency"

interface AllReportsProps {
  projects: IProject[]
  gateways: IGateway[]
  reports: IReport[]
}

export const AllReports: React.FC<AllReportsProps> = ({ projects, gateways, reports }) => {
  const data = useAllReports(reports, projects, gateways)
  const total = useMemo(
    () => data.reduce((prev, curr) => (prev * 1000 + curr.total * 1000) / 1000, 0),
    [data]
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: "27px" }}>
        <ReportPaper title={"All projects | All gateways"}>
          {data.map(curr => (
            <ReportGroup key={curr.key} group={curr} hasGateway />
          ))}
        </ReportPaper>
      </Box>
      <ReportPaper title={`TOTAL: ${numberToUSDCurrency(total)} USD`} />
    </Box>
  )
}
