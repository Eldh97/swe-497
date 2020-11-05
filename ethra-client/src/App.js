import React, { Component } from "react";
import { Route } from "react-router-dom";
import Signup from "pages/signup";
import Home from "pages/home/Home";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002333",
    },
    secondary: {
      main: "#40D5A1",
    },
  },
  typography: {
    fontSize: "1.6rem",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Header />
          <Signup />
          <Footer />
        </Route>
      </>
    </ThemeProvider>
  );
}
export default App;
