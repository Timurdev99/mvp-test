import React from "react"
import { IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface SidebarItemProps {
  isSelected?: boolean
  link?: string
  children: React.ReactNode
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ isSelected, link, children }) => {
  const navigate = useNavigate()

  return (
    <IconButton
      sx={{
        color: isSelected ? "primary.main" : "text.disabled",
        p: "6px",
        mb: "4px",
        "& svg": { width: "28px", height: "28px" },
      }}
      onClick={() => !!link && navigate(link)}
    >
      {children}
    </IconButton>
  )
}
