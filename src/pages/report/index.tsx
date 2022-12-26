import React, { useState, useCallback } from "react"
import { Box, Typography, CircularProgress } from "src/UILibrary"
import { format } from "date-fns"
import { AxiosResponse, AxiosError } from "axios"

import { ReportHeader } from "./components/reportHeader"
import { NoReport } from "./components/noReport"
import { AllReports } from "./components/allReports"
import { GatewayReports } from "./components/gatewayReport"
import { ProjectReports } from "./components/projectReport"
import { SpecificReports } from "./components/specificReports"

import { useGetAllProjects, useGetAllGateways, useGetReports } from "src/queries/reports"
import { IReport, IReportsResult } from "src/types/reports"

export const Report: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>("all")
  const [selectedGateway, setSelectedGateway] = useState<string>("all")
  const [startDate, setStartDate] = useState<Date | null>(new Date("01.01.2021"))
  const [endDate, setEndDate] = useState<Date | null>(new Date("12.31.2021"))
  const [reports, setReports] = useState<IReport[]>([])
  const [reportError, setReportError] = useState<boolean>(false)
  const [activeProject, setActiveProject] = useState<string>("all")
  const [activeGateway, setActiveGateway] = useState<string>("all")

  const {
    data: projectData,
    isLoading: isProjectLoading,
    error: projectError,
  } = useGetAllProjects()

  const {
    data: gatewayData,
    isLoading: isGatewayLoading,
    error: gatewayError,
  } = useGetAllGateways()

  const { mutate: getReports, isLoading: isGenerating } = useGetReports({
    onSuccess: (res: AxiosResponse<IReportsResult>) => {
      setReports(res.data.data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
      setReportError(true)
      setReports([])
    },
  })

  const onGenerate = useCallback(() => {
    setReportError(false)
    setActiveProject(selectedProject)
    setActiveGateway(selectedGateway)
    getReports({
      from: format(startDate || new Date("01.01.2021"), "yyyy-MM-dd"),
      to: format(endDate || new Date("21.31.2021"), "yyyy-MM-dd"),
      projectId: selectedProject === "all" ? "" : selectedProject,
      gatewayId: selectedGateway === "all" ? "" : selectedGateway,
    })
  }, [getReports, startDate, endDate, selectedProject, selectedGateway])

  if (projectError || gatewayError) {
    return (
      <Box
        sx={{
          flexGrow: 1,
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

  if (isProjectLoading || isGatewayLoading || !projectData || !gatewayData) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "primary.main" }} />
      </Box>
    )
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", my: "33px" }}>
      <ReportHeader
        projects={projectData.data.data}
        gateways={gatewayData.data.data}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedGateway={selectedGateway}
        setSelectedGateway={setSelectedGateway}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        onGenerate={onGenerate}
        isGenerating={isGenerating}
      />
      {isGenerating ? (
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CircularProgress sx={{ color: "primary.main" }} />
        </Box>
      ) : reportError ? (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title sx={{ color: "primary.main", textAlign: "center" }}>
            Something went wrong. Please try later!
          </Typography.Title>
        </Box>
      ) : reports.length ? (
        activeProject === "all" ? (
          activeGateway === "all" ? (
            <AllReports
              projects={projectData.data.data}
              gateways={gatewayData.data.data}
              reports={reports}
            />
          ) : (
            <GatewayReports
              projects={projectData.data.data}
              gatewayName={
                gatewayData.data.data.find(items => items.gatewayId === activeGateway)?.name || ""
              }
              reports={reports}
            />
          )
        ) : activeGateway === "all" ? (
          <ProjectReports
            projectName={
              projectData.data.data.find(item => item.projectId === activeProject)?.name || ""
            }
            gateways={gatewayData.data.data}
            reports={reports}
          />
        ) : (
          <SpecificReports
            projectName={
              projectData.data.data.find(item => item.projectId === activeProject)?.name || ""
            }
            gatewayName={
              gatewayData.data.data.find(items => items.gatewayId === activeGateway)?.name || ""
            }
            reports={reports}
          />
        )
      ) : (
        <NoReport />
      )}
    </Box>
  )
}
