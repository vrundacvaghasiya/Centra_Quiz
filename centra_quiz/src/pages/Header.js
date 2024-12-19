import React from 'react'
import Grid from "@mui/material/Grid2";
import {Typography } from "@mui/material";
import { styles } from '../styles/Styles';


const Header=()=>{
    return  <Grid size={{xs:12,md:12,lg:12,sm:12}} sx={{width:"100%"}}>
    <Typography
      variant="h6"
      component="div"
      sx={styles.headerTypography}
    >
      New Order Intake - Supply & install
    </Typography>
  </Grid>
}

export default Header;