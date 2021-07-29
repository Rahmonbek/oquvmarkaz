import React, { Component } from "react";
import style from "../../css/Head.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default class Head extends Component {
  render() {
    return (
      <div className={style.navbar}>
        <Navbar>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className={style.haqida}>
                  <Nav.Link>
                    <NavLink
                      className={style.linked}
                      style={{ textDecoration: "none" }}
                      activeClassName={style.stud}
                      to="/haqida"
                    >
                      Kurs haqida
                    </NavLink>
                  </Nav.Link>
                </div>
                <div className={style.sharhlar}>
                  <Nav.Link>
                    <NavLink
                      className={style.linked}
                      style={{ textDecoration: "none" }}
                      activeClassName={style.stud}
                      to="/sharhlar"
                    >
                      Sharhlar
                    </NavLink>
                  </Nav.Link>
                </div>
                <div className={style.talablar}>
                  <Nav.Link>
                    <NavLink
                      className={style.linked}
                      style={{ textDecoration: "none" }}
                      activeClassName={style.stud}
                      to="/talablar"
                    >
                      Talablar
                    </NavLink>
                  </Nav.Link>
                </div>
                <div className={style.natija}>
                  <Nav.Link>
                    <NavLink
                      className={style.linked}
                      style={{ textDecoration: "none" }}
                      activeClassName={style.stud}
                      to="/natijalar"
                    >
                      Nimalarni bilib olasiz
                    </NavLink>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
