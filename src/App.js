import React, { Component } from "react";
import User from "./pages/user_cabinet/User";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Body from "./pages/course tutorial/pages/Body";
import Login from "./pages/Login";
import Menyu from "./pages/dashboard/Menyu";
import { BrowserRouter, Route, Router, Link, Switch } from "react-router-dom";
import Exsemp from "./pages/AllCourse/Component/ExampleApp";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Menyu />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/cabinet">
                <User />
              </Route>
              <Route exact path="/cabinet/tutorial">
                <Body />
              </Route>

              <Route exact path="/allcours">
                <Exsemp />
              </Route>

            </Switch>

         

        </BrowserRouter>
      </div>
    );
  }
}
