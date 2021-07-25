import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap";

import menyu from "../../Css/Menyu.module.css";
import Xavfsizlik from "../Menu/Xavfsizlik";
import Buxgalteriya from "../Menu/Buxgalteriya";
import Menejment from "../Menu/Menejment";
import Salomatlik from "../Menu/Salomatlik";
import Biznes from "../Menu/Biznes";
import Marketing from "../Menu/Marketing";
import Dizayn from "../Menu/Dizayn";
import Dasturlash from "../Menu/Dasturlash";
import Barchasi from "../Menu/Barchasi";

export default function Menyu() {
  const [sidebar, setSidebar] = React.useState(true);

  return (
    <div>
      <Router>
        <div>
          <Navbar className={menyu.navbarMenu} collapseOnSelect expand="lg">
            <Container>
              <Navbar.Toggle
                className={menyu.navbarToggle}
                aria-controls="responsive-navbar-nav"
              />
              <ul>
                <Navbar.Collapse
                  className={menyu.navbarCollapse}
                  id="responsive-navbar-nav"
                >
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                       activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/"
                      >
                        <p className={menyu.linked}>Barchasi</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                       activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/dasturlash"
                      >
                        <p className={menyu.linked}>Dasturlash</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li> 
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/dizayn"
                      >
                        <p className={menyu.linked}>Dizayn</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/marketing"
                      >
                        <p className={menyu.linked}>Marketing</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/biznes"
                      >
                        <p className={menyu.linked}>Biznes</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/salomatlik"
                      >
                        <p className={menyu.linked}>Salomatlik</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/menejment"
                      >
                        <p className={menyu.linked}>Menejment</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/buxgalteriya"
                      >
                        <p className={menyu.linked}>Buxgalteriya</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                      activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/security"
                      >
                        <p className={menyu.linked}>Xavfsizlik</p>
                      </NavLink>
                    </li>
                  </Nav>
                </Navbar.Collapse>
              </ul>
            </Container>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/security">
              <Xavfsizlik />
            </Route>
            <Route path="/buxgalteriya">
              <Buxgalteriya />
            </Route>
            <Route path="/menejment">
              <Menejment />
            </Route>
            <Route path="/salomatlik"> 
              <Salomatlik />
            </Route>
            <Route path="/biznes">
              <Biznes />
            </Route>
            <Route path="/marketing">
              <Marketing />
            </Route>
            <Route path="/dizayn">
              <Dizayn />
            </Route>
            <Route  path="/dasturlash">
              <Dasturlash />
            </Route>
            <Route exact path="/">
              <Barchasi />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
