
import { FormControl, TextField, InputLabel, MenuItem, Autocomplete, Stack } from "@mui/material";

export interface SimpleSelectProps {
  label?: any;
  list: any[];
  onChange: (name: string, e: any) => void;
  disabled?: boolean;
  value?: string | undefined;
  width?: string | number;
  sx?: any;
  defaultMenu?: any;
  name: string;
  placeholder?: string;
}

const SimpleSelect = (props: SimpleSelectProps) => {
  const {
    label,
    list = [],
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
          multiple={false}
          getOptionLabel={(option: any) => option?.label || ''}
          inputValue={value}
          isOptionEqualToValue={(option: any) => option?.value === value}
          onChange={(_event, newValue) => {
            onChange(name, newValue?.value || '');
        }}
          renderInput={(params) => (
          <TextField {...params} name={name} placeholder={placeholder} />
          )}
          options={list}
          renderOption={(props, option) => {
            return (
              <MenuItem {...props} key={option?.value} value={option?.value} component='li' sx={{whiteSpace: 'pre-line'}} >
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
