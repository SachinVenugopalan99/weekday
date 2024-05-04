
import { FormControl, FormLabel, TextField, InputLabel, MenuItem, Autocomplete, Stack } from "@mui/material";
import * as React from "react";

export interface SimpleSelectProps {
  label?: any;
  size?: "small" | "medium";
  list: any[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, data?: any | any) => void;
  disabled?: boolean;
  value?: string | null;
  required?: boolean;
  width?: string | number;
  sx?: any;
  defaultMenu?: any;
  name?: string;
  placeholder?: string;
}

const SimpleSelect = (props: SimpleSelectProps) => {
  const {
    label,
    size = "small",
    list = [],
    required = false,
    onChange,
    disabled = false,
    value,
    width = "140px",
    sx,
    name,
    placeholder = "",
  } = props;

  return (
    <FormControl sx={{ m: 0, width: width, ...sx }}>
      <InputLabel sx={{ top: "6px" }}>{label}</InputLabel>

      <Stack sx={{ margin: "4px 0" }}>
        <Autocomplete
          id={name}
          disabled={disabled}
          value={value}
          onChange={(e) =>onChange}
          multiple={false}
          getOptionLabel={(option: any) => option?.label}
          isOptionEqualToValue={(option: any) => option?.value === value}
          renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
          )}
          options={list}
          renderOption={(props, option) => {
            return (
              <MenuItem key={option?.value} value={option?.value} component='li' sx={{whiteSpace: 'pre-line'}} {...props}>
              <Stack direction="row" alignItems="center" gap={1}>
                {option?.startAdornment} {option?.label} {option?.endAdornment}
              </Stack>
            </MenuItem>
            )
          }}
          />
      </Stack>
    </FormControl>
  );
};

export default SimpleSelect;
