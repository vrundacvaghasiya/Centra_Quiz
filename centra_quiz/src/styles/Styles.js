import { theme } from "./Theme";

export const styles = {
  typography: {
    color: theme.palette.typography.contrastText,
    fontWeight: "bold",
    paddingRight: "2px",
  },
  inputRequire: {
    color: theme.palette.typography.main,
    fontWeight: "bold",
    paddingRight: "2px",
    fontSize: "14px",
  },
  headerTypography: {
    background: theme.palette.primary.main,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingLeft: 1,
    color: theme.palette.typography.light,
  },
  box: {
    margin: 1,
    display: "flex",
    // alignItems: "center",
    flexDirection:"column",
    background: theme.palette.primary.contrastText,
  },
  border:{
     border: `1px solid ${theme.palette.typography.contrastText}`,
  },
  fileGrid:{
    height:"90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign:"center",
    justifyContent: "center",
    background: "#fafafa",
    cursor: "pointer",
  },
  loader:{
    width: "100%",
    height: window.innerHeight - 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  }
};
