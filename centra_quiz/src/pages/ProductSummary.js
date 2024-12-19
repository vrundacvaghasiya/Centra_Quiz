import { Typography } from "@mui/material";
import { default as TextField } from "../components/TextField/TextField";
import Grid from "@mui/material/Grid2";
import { styles } from "../styles/Styles";
import { default as Select } from "../components/DropDown/DropDown";
import SubHeader from "../components/SubHeader/SubHeader";

const ProductSummary = ({
  ProductSummary,
  setProductSummary,
  handleChange,
}) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={styles.border}>
      <SubHeader label="ProductSummary" />
      <Grid
        container
        display={"flex"}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        flexDirection={"row"}
        padding={1}
      >
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          {Object.entries(ProductSummary).map(([key, val], i) => {
            return (
              i < 6 && (
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"start"}
                  key={key}
                  paddingRight={"8px"}
                  paddingBottom={"8px"}
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
                    onChange={(e) => handleChange(e, setProductSummary)}
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
                </Grid>
              )
            );
          })}
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          {Object.entries(ProductSummary).map(([key, val], i) => {
            return (
              i > 5 && (
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"start"}
                  key={key}
                  paddingRight={"8px"}
                  paddingBottom={"8px"}
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
                        setProductSummary
                      );
                    }}
                    error={val.error}
                    helperText={val.helperText}
                  />
                </Grid>
              )
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductSummary;
