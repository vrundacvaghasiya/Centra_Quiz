import Grid from "@mui/material/Grid2";
import { styles } from "../styles/Styles";
import SubHeader from "../components/SubHeader/SubHeader";
import { theme } from "../styles/Theme";

const Attachments = ({handleFileChange, handleDrop }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
      sx={{
        border: `1px solid ${theme.palette.typography.contrastText}`,
        background: "#fafafa",
      }}
    >
      <SubHeader label="Attachments" />
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        onClick={handleFileChange}
        sx={styles.fileGrid}
      >
        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          multiple
          accept="image/*, application/pdf" 
        />
        <label htmlFor="browse" className="browse-btn">
          Drag here or click to add files
        </label>
      </Grid>
    </Grid>
  );
};

export default Attachments;
