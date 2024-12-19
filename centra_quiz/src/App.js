import { Box, Button, CircularProgress } from "@mui/material";
import Header from "./pages/Header";
import Grid from "@mui/material/Grid2";
import "./styles/App.css";
import { theme } from "./styles/Theme";
import { styles } from "./styles/Styles";
import CustomerInfo from "./pages/CustomerInfo";
import OrderDetails from "./pages/OrderDetails";
import ProductSummary from "./pages/ProductSummary";
import { useQuiz } from "./hooks/useQuiz";
import Attachments from "./pages/Attachments";

function App() {
  const {
    customerInfo,
    handleChange,
    setCustomerInfo,
    orderDetailsInfo,
    SetOrderDetailsInfo,
    summary,
    convertPdF,
    setSummary,
    files,
    setFiles,
    handleDrop,
    handleFileChange,
    Loading,
  } = useQuiz();
  return (
    <Box sx={styles.box} id="capture">
      <Header />
      {Loading ? (
        <Grid size={{ sm: 12, md: 12, lg: 12, xs: 12 }} sx={styles.loader}>
          <CircularProgress size={40} />
        </Grid>
      ) : (
        <Grid
          container
          sx={{ background: theme.palette.primary.contrastText }}
          rowSpacing={1}
          margin={1}
          columnSpacing={{ xs: 1, sm: 2, md: 1, lg: 1 }}
          paddingBottom={1}
        >
          <CustomerInfo
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
            handleChange={handleChange}
          />
          <OrderDetails
            OrderDetails={orderDetailsInfo}
            setOrderDetails={SetOrderDetailsInfo}
            handleChange={handleChange}
          />
          <ProductSummary
            ProductSummary={summary}
            setProductSummary={setSummary}
            handleChange={handleChange}
          />
          <Attachments
            files={files}
            setFiles={setFiles}
            handleFileChange={handleFileChange}
            handleDrop={handleDrop}
          />
          <Grid
            size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"end"}
            textAlign={"end"}
          >
            <Button
              variant="contained"
              onClick={convertPdF}
              sx={{
                width: "150px",
                marginRight: 2,
                background: theme.palette.primary.main,
              }}
            >
              Submit
            </Button>

            <Button
              variant="outlined"
              sx={{
                width: "150px",
                background: theme.palette.background.main,
                border: `1px solid ${theme.palette.background.main}`,
                color: theme.palette.secondary.contrastText,
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default App;
