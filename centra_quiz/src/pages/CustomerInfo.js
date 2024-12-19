import { Typography } from "@mui/material";
import { default as TextField } from "../components/TextField/TextField";
import Grid from "@mui/material/Grid2";
import { styles } from "../styles/Styles";
import SubHeader from "../components/SubHeader/SubHeader";

const CustomerInfo = ({ customerInfo, setCustomerInfo, handleChange }) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }}  sx={styles.border}>
      <SubHeader label="Customer Information" />
      <Grid
        container
        display={"flex"}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        flexDirection={"row"}
        padding={1}
      >
        {Object.entries(customerInfo).map(([key, val]) => {
          return (
            <Grid
              key={key}
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"start"}
             
              justifyContent={"space-between"}
            >
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Typography variant="caption" sx={styles.typography}>
                  {val.text}
                </Typography>
                <Typography variant="caption" sx={styles.inputRequire}>
                  *
                </Typography>
              </Grid>
              <TextField
                id={key}
                name={key}
                value={val.value}
                size="small"
                placeholder={val.placeholder}
                onChange={(e) => handleChange(e, setCustomerInfo)}
                error={val.error}
                inputProps={val.inputProps && val.inputProps}
                helperText={val.helperText}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CustomerInfo;
