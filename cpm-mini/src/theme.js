import { createTheme } from "@mui/material/styles";

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4a7856", // Fern Green
    },
    secondary: {
      main: "#a27035", // Golden Brown
    },
    background: {
      default: "#3a3335", // background: Jet
    },
    text: {
      primary: "#ffebe7", // Misty Rose
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Custom font
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners for components
  },
});

export default theme;
