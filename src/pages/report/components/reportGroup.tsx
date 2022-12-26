import React, { useState } from "react"
import { Box, Typography, Collapse } from "src/UILibrary"

import { ReportRow } from "./reportRow"

import { IReportGroup, IRowData } from "src/types/reports"
import { numberToUSDCurrency } from "src/modules/currency"

interface ReportGroupProps {
  group: IReportGroup
  hasGateway?: boolean
}

const tableHeader: IRowData = {
  date: "Date",
  gateway: "Gateway",
  transactionId: "Transaction ID",
  amount: "Amount",
}

export const ReportGroup: React.FC<ReportGroupProps> = ({ group, hasGateway }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Box sx={{ mb: "5px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "26px 24px",
          bgcolor: "background.default",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography.Action sx={{ flexGrow: 1, color: "text.primary", mr: "4px" }}>
          {group.name}
        </Typography.Action>
        <Typography.Action
          sx={{ flexShrink: 0, color: "text.primary" }}
        >{`TOTAL: ${numberToUSDCurrency(group.total)} USD`}</Typography.Action>
      </Box>
      <Collapse in={isOpen}>
        <Box
          sx={{
            mt: "14px",
            "& > div:nth-of-type(odd)": { bgcolor: "background.default" },
          }}
        >
          <ReportRow data={tableHeader} hasGateway={hasGateway} />
          {group.data.map(report => (
            <ReportRow
              key={report.paymentId}
              data={{
                date: report.created,
                gateway: report.gatewayName,
                transactionId: report.paymentId,
                amount: `${report.amount} USD`,
              }}
              hasGateway={hasGateway}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}
