import React from "react"
import { styled, Select as MuiSelect, SelectProps, InputBase } from "@mui/material"

const Input = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    minWidth: "100px",
    borderWidth: 0,
    borderRadius: "5px",
    fontSize: "14px",
    lineHeight: "16px",
    padding: "6px 12px",
    fontWeight: 400,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
    "&:hover": {
      borderRadius: "5px",
    },
    "&:focus": {
      borderRadius: "5px",
    },
  },
}))

export const Select = ({ children, sx, ...rest }: SelectProps) => {
  return (
    <MuiSelect input={<Input />} sx={{ "& svg": { color: "background.default" }, ...sx }} {...rest}>
      {children}
    </MuiSelect>
  )
}
