import React, { useMemo } from "react"
import { Box, Grid, Typography } from "src/UILibrary"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"

import { generateRandomColor } from "src/modules/color"
import { IReportGroup } from "src/types/reports"

interface ChartReportsProps {
  data: IReportGroup[]
  total: number
}

export const ChartReports: React.FC<ChartReportsProps> = ({ data, total }) => {
  const chatData = useMemo(
    () =>
      data.map(item => {
        return {
          name: item.name,
          y: Math.floor((item.total * 10000) / total) / 100,
          color: generateRandomColor(),
        }
      }),
    [data]
  )
  console.log(chatData)

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "pie",
      },
      title: {
        text: "",
      },
      exporting: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: "{point.y}%",
            distance: -30,
            style: {
              fontSize: "16px",
              borderColor: "white",
              borderWidth: 0,
              color: "white",
              textShadow: "0 0 white",
            },
          },
        },
      },
      credits: {
        enabled: false,
      },

      series: [
        {
          data: chatData,
          size: "80%",
          innerSize: "60%",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 400,
            },
          },
        ],
      },
    }),
    [chatData]
  )

  return (
    <Box sx={{ mb: "80px" }}>
      <Box sx={{ bgcolor: "background.paper", p: "18px 23px", borderRadius: "10px", mb: "80px" }}>
        <Grid container spacing={1}>
          {chatData.map(item => (
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", alignItems: "center" }}
              key={item.name}
            >
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "5px",
                  bgcolor: item.color,
                  mr: "12px",
                }}
              />
              <Typography.Detail sx={{ color: "text.primary" }}>{item.name}</Typography.Detail>
            </Grid>
          ))}
        </Grid>
      </Box>
      <HighchartsReact
        containerProps={{ style: { width: "100%", height: "100%" } }}
        options={chartOptions}
        highcharts={Highcharts}
      />
    </Box>
  )
}
