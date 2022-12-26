import React from "react"
import { Button as MuiButton, ButtonProps } from "@mui/material"

export const Button: React.FC<ButtonProps> = ({ children, sx, ...rest }) => {
  return (
    <MuiButton
      sx={{
        minWidth: "120px",
        borderRadius: "5px",
        px: "10px",
        py: "8px",
        fontSize: "14px",
        lineHeight: "16px",
        fontWeight: 400,
        textTransform: "none",
        borderWidth: 0,
        bgcolor: "primary.main",
        color: "background.default",
        "&:hover": {
          color: "primary.main",
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
