import React, { Component } from "react";
import {BrowserRouter,Route,Switch,} from "react-router-dom";
import Header from "./pages/Header";
import Navbarr from "./pages/Navbarr";
import Courses from "./pages/Courses";
import Knowledge from "./pages/Knowledge";
import Certificate from "./pages/Certificate";
import Mentors from "./pages/Mentors";
import Footer from "./pages/Footer";

export default class User extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Navbarr />
          <Switch>
            <Route exact path="/">
                <Courses />
            </Route>
            <Route exact path="/courses">
                <Courses />
            </Route>
            <Route exact path="/knowledge">
                <Knowledge />
            </Route>
            <Route exact path="/certificate">
                <Certificate />
            </Route>
            <Route exact path="/mentors">
                <Mentors />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
