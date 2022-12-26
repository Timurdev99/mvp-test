import { createTheme } from "@mui/material/styles"

export const DefaultTheme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#F1FAFE",
    },
    primary: {
      main: "#005B96",
      light: "#F6CA65",
    },
    secondary: {
      main: "#1BC5BD",
      light: "#F3F6F9",
    },
    text: {
      primary: "#011F4B",
      secondary: "#7E8299",
      disabled: "#CDCCCC",
    },
  },
})
