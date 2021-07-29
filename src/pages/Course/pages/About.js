import React, { Component } from "react";
import Head from "./about/Head";
import Haqida from "./about/Haqida";
import Sharhlar from "./about/Sharhlar";
import Talablar from "./about/Talablar";
import Natijalar from "./about/Natijalar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path="/haqida">
              <Haqida />
            </Route>
            <Route exact path="/sharhlar">
              <Sharhlar />
            </Route>
            <Route exact path="/talablar">
              <Talablar />
            </Route>
            <Route exact path="/natijalar">
              <Natijalar />
            </Route>
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}
