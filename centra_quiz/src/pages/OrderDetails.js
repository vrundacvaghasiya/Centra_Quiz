import { Typography } from "@mui/material";
import { default as TextField } from "../components/TextField/TextField";
import Grid from "@mui/material/Grid2";
import { styles } from "../styles/Styles";
import { default as Select } from "../components/DropDown/DropDown";
import SubHeader from "../components/SubHeader/SubHeader";

const OrderDetails = ({ OrderDetails = [], setOrderDetails, handleChange }) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }} sx={styles.border}>
      <SubHeader label="OrderDetails" />
      <Grid
        container
        display={"flex"}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        flexDirection={"row"}
        padding={1}
      >
        {Object.entries(OrderDetails).map(([key, val], i) => {
          return (
            <>
              {(key === "discount" || key === "commission") && (
                <Grid
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"start"}
                  key={key}
                  justifyContent={"space-between"}
                ></Grid>
              )}
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"start"}
                key={key}
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
                {val.type === "select" ? (
                  <Select
                    options={val.options}
                    label={val.placeholder}
                    value={val.value ?? ""}
                    handleChange={(e) => {
                      handleChange(
                        {
                          target: {
                            value: e.target.value,
                            name: key,
                            checkValidity: () => {
                              return true;
                            },
                          },
                        },
                        setOrderDetails
                      );
                    }}
                    error={val.error}
                    helperText={val.helperText}
                  />
                ) : (
                  <TextField
                    id={key}
                    name={key}
                    value={val.value}
                    size="small"
                    placeholder={val.placeholder}
                    onChange={(e) => handleChange(e, setOrderDetails)}
                    error={val.error}
                    sx={{
                      width: "60%",
                      ".MuiOutlinedInput-input": {
                        fontSize: 13,
                        display: "flex",
                        alignItems: "center",
                        textAlign: "flexStart",
                      },
                    }}
                    inputProps={val.inputProps && val.inputProps}
                    helperText={val.helperText}
                  />
                )}
              </Grid>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
