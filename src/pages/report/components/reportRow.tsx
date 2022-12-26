import React from "react"
import { Grid, Typography } from "src/UILibrary"

import { IRowData } from "src/types/reports"

interface ReportRowProps {
  data: IRowData
  hasGateway?: boolean
}

export const ReportRow: React.FC<ReportRowProps> = ({ data, hasGateway }) => {
  return (
    <Grid container sx={{ p: "5px 24px" }}>
      <Grid item xs={hasGateway ? 3 : 4}>
        <Typography.Detail sx={{ color: "text.primary" }}>{data.date}</Typography.Detail>
      </Grid>
      {hasGateway && (
        <Grid item xs={hasGateway ? 3 : 4}>
          <Typography.Detail sx={{ color: "text.primary", textAlign: "center" }}>
            {data.gateway}
          </Typography.Detail>
        </Grid>
      )}
      <Grid item xs={hasGateway ? 3 : 4}>
        <Typography.Detail sx={{ color: "text.primary", textAlign: "center" }}>
          {data.transactionId}
        </Typography.Detail>
      </Grid>
      <Grid item xs={hasGateway ? 3 : 4}>
        <Typography.Detail sx={{ color: "text.primary", textAlign: "right" }}>
          {data.amount}
        </Typography.Detail>
      </Grid>
    </Grid>
  )
}
