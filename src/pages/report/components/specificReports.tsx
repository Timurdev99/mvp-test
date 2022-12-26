import React, { useMemo } from "react"
import { Box } from "src/UILibrary"

import { ReportPaper } from "./reportPaper"
import { ReportRow } from "./reportRow"

import { IReport, IRowData } from "src/types/reports"
import { numberToUSDCurrency } from "src/modules/currency"

const tableHeader: IRowData = {
  date: "Date",
  gateway: "Gateway",
  transactionId: "Transaction ID",
  amount: "Amount",
}

interface SpecificReportsProps {
  projectName: string
  gatewayName: string
  reports: IReport[]
}

export const SpecificReports: React.FC<SpecificReportsProps> = ({
  projectName,
  gatewayName,
  reports,
}) => {
  const total = useMemo(
    () => reports.reduce((prev, curr) => (prev * 1000 + curr.amount * 1000) / 1000, 0),
    [reports]
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: "27px" }}>
        <ReportPaper title={`${projectName} | ${gatewayName}`}>
          <Box
            sx={{
              "& > div:nth-of-type(odd)": { bgcolor: "background.default" },
            }}
          >
            <ReportRow data={tableHeader} />
            {reports.map(report => (
              <ReportRow
                key={report.paymentId}
                data={{
                  date: report.created,
                  gateway: "",
                  transactionId: report.paymentId,
                  amount: `${report.amount} USD`,
                }}
              />
            ))}
          </Box>
        </ReportPaper>
      </Box>
      <ReportPaper title={`TOTAL: ${numberToUSDCurrency(total)} USD`} />
    </Box>
  )
}
