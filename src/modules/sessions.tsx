import React, { createContext, useContext } from "react"
import { Box, CircularProgress, Typography } from "src/UILibrary"

import { useGetAllUsers } from "src/queries/users"
import { IUser } from "src/types/users"

export const UserContext = createContext<IUser | null>(null)

interface SessionProviderProps {
  children: React.ReactNode
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const { data, isLoading, error } = useGetAllUsers()

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "primary.main" }} />
      </Box>
    )
  }

  if (error || !data?.data.data.length) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title sx={{ color: "primary.main", textAlign: "center" }}>
          Something went wrong. Please try later!
        </Typography.Title>
      </Box>
    )
  }

  return <UserContext.Provider value={data.data.data[0]}>{children}</UserContext.Provider>
}

export const useUser = () => {
  return useContext(UserContext)
}
