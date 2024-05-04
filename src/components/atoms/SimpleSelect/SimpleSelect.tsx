
import { FormControl, FormLabel, InputLabel, MenuItem, Select, Stack } from "@mui/material";
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
  testId?: string;
  internalLabel?: boolean;
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
    defaultMenu, // to set first select option which is not in list
    name,
    placeholder = "",
    testId = "",
    internalLabel = false,
  } = props;

  return (
    <FormControl sx={{ m: 0, minWidth: width, ...sx }}>
      {!internalLabel ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          <FormLabel component="legend">
            {label} {required && label ? <span>*</span> : null}
          </FormLabel>
        </Stack>
      ) : label ? (
        <InputLabel sx={{ top: "6px" }}>{label}</InputLabel>
      ) : null}

      <Stack sx={{ margin: "4px 0" }}>
        <Select
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={(e) =>onChange}
          defaultValue={defaultMenu?.value}
          label={internalLabel && label ? label : null}>
          {list?.map((item: any) => (
            <MenuItem key={item?.value} value={item?.value} disabled={item?.disabled}>
              <Stack direction="row" alignItems="center" gap={1}>
                {item?.startAdornment} {item?.label} {item?.endAdornment}
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </FormControl>
  );
};

export default SimpleSelect;
