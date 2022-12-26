import React from "react"
import { Box, Typography, Image } from "src/UILibrary"

import NoReportImage from "src/assets/imgs/no_report.png"

export const NoReport: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography.Title sx={{ color: "text.primary", mb: "4px" }}>No reports</Typography.Title>
      <Typography.Action
        sx={{ color: "text.secondary", maxWidth: "520px", textAlign: "center", mx: "10px" }}
      >
        Currently you have no data for the reports to be generated.
      </Typography.Action>
      <Typography.Action
        sx={{
          color: "text.secondary",
          maxWidth: "520px",
          textAlign: "center",
          mb: "50px",
          mx: "10px",
        }}
      >
        Once you start generating traffic through the Balance application the reports will be shown.
      </Typography.Action>
      <Image src={NoReportImage} alt="NoReport" />
    </Box>
  )
}
