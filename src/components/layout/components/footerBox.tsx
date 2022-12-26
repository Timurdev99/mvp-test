import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography } from "src/UILibrary"

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ py: "22px", display: "flex", alignItems: "center" }}>
      <Typography.Action
        sx={{
          color: "primary.main",
          cursor: "pointer",
          mx: "4px",
          "&:hover": { textDecoration: "underline" },
        }}
        onClick={() => navigate("/")}
      >
        {"Terms&Conditions"}
      </Typography.Action>
      <Box sx={{ width: "1px", height: "16px", bgcolor: "primary.main" }} />
      <Typography.Action
        sx={{
          color: "primary.main",
          cursor: "pointer",
          mx: "4px",
          "&:hover": { textDecoration: "underline" },
        }}
        onClick={() => navigate("/")}
      >
        {"Terms&Conditions"}
      </Typography.Action>
    </Box>
  )
}
