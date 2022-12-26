import React from "react"
import { Box, Typography } from "src/UILibrary"

interface ReportPaperProps {
  title: string
  children?: React.ReactNode
}

export const ReportPaper: React.FC<ReportPaperProps> = ({ title, children }) => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: "18px 23px", borderRadius: "10px" }}>
      <Typography.Action sx={{ color: "text.primary" }}>{title}</Typography.Action>
      {children && <Box sx={{ mt: "34px" }}>{children}</Box>}
    </Box>
  )
}
