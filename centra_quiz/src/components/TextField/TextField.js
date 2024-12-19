import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = ({
  error,
  helperText,
  value = "",
  variant = "outlined",
  size = "small",
  onChange = {},
  ...rest
}) => {
  return (
    <TextField
      error={error}
      id={"outlined-name"}
      value={value}
      required={true}
      size={size}
      onChange={onChange}
      variant={variant}
      sx={{
        width: "50%",
        innerHeight: "10%",
        padding: 0,
        ".MuiOutlinedInput-input": {
          fontSize: 13,
          display:"flex",
          alignItems:"center",
          textAlign:"flexStart"
        },
       
      }}
      helperText={error && helperText}
      {...rest}
    />
  );
};

export default CustomTextField;
