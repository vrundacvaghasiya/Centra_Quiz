import { Typography } from "@mui/material";
import { styles } from "./SubHeaderStyle";

const SubHeader = ({ label = "" }) => {
  return (
    <Typography
      variant="body"
      component="div"
      sx={styles.typography}
    >
      {label}
    </Typography>
  );
};

export default SubHeader;
