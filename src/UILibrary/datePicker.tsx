import React from "react"
import { TextField } from "@mui/material"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"

interface DatePickerProps {
  value: Date | null
  onChange: (value: Date | null, keyboardInputValue?: string | undefined) => void
  shouldDisableDate?: (day: Date) => boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, shouldDisableDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={value}
        onChange={onChange}
        renderInput={params => (
          <TextField
            sx={{
              maxWidth: "140px",
              bgcolor: "secondary.main",
              borderRadius: "5px",
              mr: "23px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: 0,
                },
              },
              "& input": {
                fontSize: "14px",
                lineHeight: "16px",
                py: "6px",
                pl: "18px",
                fontWeight: 400,
                color: "background.default",
              },
              "& svg": {
                color: "background.default",
              },
            }}
            {...params}
          />
        )}
        inputFormat="yyyy-MM-dd"
        shouldDisableDate={shouldDisableDate}
      />
    </LocalizationProvider>
  )
}
