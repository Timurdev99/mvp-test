import React from "react"
import {
  Box,
  InsertChartIcon,
  GridViewIcon,
  DesktopWindowsIcon,
  PieChartIcon,
  PowerSettingsNewIcon,
} from "src/UILibrary"

import { SidebarItem } from "./sidebarItem"

export const Sidebar: React.FC = () => {
  return (
    <Box sx={{ p: "34px 28px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <SidebarItem>
        <InsertChartIcon />
      </SidebarItem>
      <SidebarItem>
        <GridViewIcon />
      </SidebarItem>
      <SidebarItem>
        <DesktopWindowsIcon />
      </SidebarItem>
      <SidebarItem isSelected link="/">
        <PieChartIcon />
      </SidebarItem>
      <SidebarItem>
        <PowerSettingsNewIcon />
      </SidebarItem>
    </Box>
  )
}
