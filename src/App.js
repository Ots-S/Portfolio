import React from "react";
import Home from "../src/components/Home";
import "./App.css";
import Fade from "@material-ui/core/Fade";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115293",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
