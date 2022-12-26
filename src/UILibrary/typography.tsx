import React from "react"
import { Typography as MuiTypography, TypographyProps } from "@mui/material"

const TypographyComponentWithStyles = (defaultStyles: TypographyProps) => {
  const TextComponent = ({ children, ...rest }: TypographyProps) => {
    return (
      <MuiTypography {...defaultStyles} {...rest}>
        {children}
      </MuiTypography>
    )
  }

  return TextComponent
}

export const Typography = {
  Title: TypographyComponentWithStyles({
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 700,
  }),
  Detail: TypographyComponentWithStyles({
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: 400,
  }),
  Action: TypographyComponentWithStyles({
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 700,
  }),
}
