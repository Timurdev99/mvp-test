import React from "react"
import {
  Box,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  DatePicker,
  Button,
} from "src/UILibrary"

import { IProject, IGateway } from "src/types/reports"

interface ReportHeaderProps {
  projects: IProject[]
  gateways: IGateway[]
  selectedProject: string
  setSelectedProject: (value: string) => void
  selectedGateway: string
  setSelectedGateway: (value: string) => void
  startDate: Date | null
  setStartDate: (value: Date | null) => void
  endDate: Date | null
  setEndDate: (value: Date | null) => void
  onGenerate: () => void
  isGenerating: boolean
}

export const ReportHeader: React.FC<ReportHeaderProps> = ({
  projects,
  gateways,
  selectedProject,
  setSelectedProject,
  selectedGateway,
  setSelectedGateway,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onGenerate,
  isGenerating,
}) => {
  const onProjectChange = (e: SelectChangeEvent<unknown>) => {
    setSelectedProject(e.target.value as string)
  }

  const onGatewayChange = (e: SelectChangeEvent<unknown>) => {
    setSelectedGateway(e.target.value as string)
  }
  return (
    <Box sx={{ flexShrink: 0, display: "flex", mt: "8px", alignItems: "flex-start", mb: "27px" }}>
      <Box sx={{ flexGrow: 1, mr: "23px" }}>
        <Typography.Title sx={{ color: "text.primary", mb: "4px" }}>Reports</Typography.Title>
        <Typography.Action sx={{ color: "text.secondary" }}>
          Easily generate a report of your transactions
        </Typography.Action>
      </Box>
      <Select value={selectedProject} sx={{ mr: "23px" }} onChange={onProjectChange}>
        <MenuItem value="all">All Projects</MenuItem>
        {projects.map(project => (
          <MenuItem key={project.projectId} value={project.projectId}>
            {project.name}
          </MenuItem>
        ))}
      </Select>
      <Select value={selectedGateway} sx={{ mr: "23px" }} onChange={onGatewayChange}>
        <MenuItem value="all">All Gateways</MenuItem>
        {gateways.map(gateway => (
          <MenuItem key={gateway.gatewayId} value={gateway.gatewayId}>
            {gateway.name}
          </MenuItem>
        ))}
      </Select>
      <DatePicker
        value={startDate}
        onChange={newValue => setStartDate(newValue)}
        shouldDisableDate={day => day < new Date("01.01.2021") || day >= new Date("01.01.2022")}
      />
      <DatePicker
        value={endDate}
        onChange={newValue => setEndDate(newValue)}
        shouldDisableDate={day =>
          day < (startDate || new Date("01.01.2021")) || day >= new Date("01.01.2022")
        }
      />
      <Button onClick={onGenerate} disabled={isGenerating}>
        Generate Report
      </Button>
    </Box>
  )
}
