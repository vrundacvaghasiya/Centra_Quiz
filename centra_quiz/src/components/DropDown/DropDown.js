import { MenuItem, Select, Typography } from "@mui/material";

const CustomDropDown = ({
  handleChange,
  value = "",
  options,
  label = "",
  error = false,
  helperText,
}) => {
  return (
    <Select
      displayEmpty
      size="small"
      sx={{ width: "60%", fontSize: 12 }}
      value={value}
      error={error}
      // helperText={error && helperText}
      renderValue={(value) => {
        if (!value) {
          return (
            <Typography sx={{ fontSize: 12 }} color="gray">
              {label}
            </Typography>
          );
        }
        return value;
      }}
      onChange={handleChange}
    >
      {options?.map((item) => {
        return (
          <MenuItem key={item.value} sx={{ fontSize: 12 }} value={item.value}>
            {item.name}
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default CustomDropDown;
