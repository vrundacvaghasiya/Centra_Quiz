import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3949ab",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    typography: {
      light: "#ffffff",
      contrastText: "#bdbdbd",
      main: "red",
    },
    background: {
      main: "#eeeeee",
    },
  },
});
