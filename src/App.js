import React from "react";
import Home from "../src/components/Home";
import "./App.css";
import Fade from "@material-ui/core/Fade";

function App() {
  return (
    <div>
      <Fade in={true} timeout={5000}>
        <Home />
      </Fade>
    </div>
  );
}

export default App;
