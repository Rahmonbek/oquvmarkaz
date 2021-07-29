import React, { Component } from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./pages/Footer";

export default class FreeApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
    );
  }
}
