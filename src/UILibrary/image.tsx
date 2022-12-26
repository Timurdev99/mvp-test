import React from "react"
import { Box, BoxProps } from "@mui/material"

export const Image: React.FC<BoxProps & { src: string; alt: string }> = ({
  src,
  alt,
  sx,
  ...rest
}) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        "& img": { objectFit: "cover", maxWidth: "100%", height: "auto" },
        ...sx,
      }}
      {...rest}
    >
      <img src={src} alt={alt} />
    </Box>
  )
}
