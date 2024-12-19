import Grid from "@mui/material/Grid2";
import React from "react";

const CustomGrid = (props) => {
  return (
    <Grid size={{sx:6,md:6,lg:6,sm:6}}>
       {props.children}
    </Grid>
  );
};

export default CustomGrid;