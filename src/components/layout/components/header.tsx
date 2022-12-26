import React from "react"
import { useNavigate } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Image,
  IconButton,
  SortIcon,
  Box,
  Avatar,
  Typography,
} from "src/UILibrary"

import { useUser } from "src/modules/sessions"
import LogoImage from "src/assets/imgs/logo.png"

export const Header: React.FC = () => {
  const navigate = useNavigate()
  const user = useUser()

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.default",
        boxShadow: "none",
        borderWidth: "0 0 2px 0",
        borderStyle: "solid",
        borderColor: "secondary.light",
      }}
    >
      <Toolbar
        sx={{
          p: "21px 100px 16px 35px !important",
        }}
      >
        <Image
          src={LogoImage}
          alt="Logo"
          sx={{ mr: "24px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <IconButton sx={{ mr: "10px" }}>
          <SortIcon sx={{ color: "primary.main", width: "30px", height: "30px" }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Avatar
            sx={{ bgcolor: "primary.light", borderRadius: "5px", fontWeight: 700, mr: "11px" }}
          >
            {user ? `${user.firstName[0]}${user.lastName[0]}` : ""}
          </Avatar>
          <Typography.Action sx={{ color: "primary.main" }}>
            {user ? `${user.firstName} ${user.lastName}` : ""}
          </Typography.Action>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
