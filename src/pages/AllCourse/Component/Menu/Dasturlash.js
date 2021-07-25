import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Badge } from "antd";
import All from "./DasturlashMenu/All";
import ApparatPragram from "./DasturlashMenu/ApparatPragram";
import DesktopPragram from "./DasturlashMenu/Desktoppragram";
import GamePragram from "./DasturlashMenu/GamePragram";
import MobilePragram from "./DasturlashMenu/MobilePragram";
import WebPragram from "./DasturlashMenu/WebPragram";
import styles from "../../Css/Dasturlash.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Dasturlash() {
  return (
    <div >
      <Router>
        <div>
          <div  className={styles.fefrefe}>
            <Navbar  style={{backgroundColor:'#FFFFFF'}} className={styles.navbarMenu} collapseOnSelect expand="lg">
              <Container>
                <Navbar.Toggle
                  className={styles.navbarToggle}
                  aria-controls="responsive-navbar-nav"
                />
                <ul>
                  <Navbar.Collapse
                    className={styles.navbarCollapse}
                    id="responsive-navbar-nav"
                  >
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          exact
                          to="/"
                        >
                          <p className={styles.linked}>Barchasi</p>
                        </NavLink>
                      </li>
                    </Nav>
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          to="/gameDasturlash"
                        >
                          <p className={styles.linked}>Game dasturlash</p>
                        </NavLink>
                      </li>
                    </Nav>
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          to="/webDasturlash"
                        >
                          <p className={styles.linked}>
                            Web dasturlash{" "}
                            <Badge size="default"className={styles.badge} >
                              <Link href="#" className={styles.BadgeColor} >142 ta</Link>
                            </Badge>
                          </p>
                        </NavLink>
                      </li>
                    </Nav>
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          to="/desktopDasturlash"
                        >
                          <p className={styles.linked}>Desktop dasturlash</p>
                        </NavLink>
                      </li>
                    </Nav>
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          to="/apparatDasturlash"
                        >
                          <p className={styles.linked}>Apparat dasturlash</p>
                        </NavLink>
                      </li>
                    </Nav>
                    <Nav>
                      <li>
                        <NavLink
                          activeClassName={styles.selected}
                          style={{ textDecoration: "none", color: "#9DA7BB" }}
                          activeStyle={{
                            color: "#010101",
                            borderBottom: "solid 4px #536DFD",
                          }}
                          to="/mobilDasturlash"
                        >
                          <p className={styles.linked}>Mobile dasturlash</p>
                        </NavLink>
                      </li>
                    </Nav>
                  </Navbar.Collapse>
                </ul>
              </Container>
            </Navbar>
            </div>
            <div className={styles.lllll}></div>

          

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/gameDasturlash">
              <GamePragram />
            </Route>
            <Route path="/webDasturlash">
              <WebPragram />
            </Route>
            <Route path="/desktopDasturlash">
              <DesktopPragram />
            </Route>
            <Route path="/apparatDasturlash">
              <ApparatPragram />
            </Route>
            <Route path="/mobilDasturlash">
              <MobilePragram />
            </Route>
            <Route path="/">
              <All />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
