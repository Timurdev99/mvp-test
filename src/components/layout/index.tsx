import React from "react"
import { Box } from "src/UILibrary"

import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { Footer } from "./components/footerBox"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Header />
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", pr: "100px" }}>
        <Box sx={{ flexShrink: 0 }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ flexGrow: 1, px: "4px", display: "flex", flexDirection: "column" }}>
            {children}
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
