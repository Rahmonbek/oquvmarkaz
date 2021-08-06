import React, { Component } from "react";
import style from "../css/Navbar.module.css";
import {
  Dropdown,
  Button,
  NavbarBrand,
  Navbar,
  NavbarToggle,
  Nav,
} from "react-bootstrap";

import logo122 from "../img/logo122.png";
import logo222 from "../img/logo222.png";
import vector22 from "../img/Vector22.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";

export default class Bosh extends Component {
  render() {
    return (
      <div>
        <header>
          <div
            style={{
              position: "fixed",
              zIndex: "223",
              backgroundColor: "white",
              width: "100%",
            }}
            className={style.header_top}
          >
            <div className={style.container}>
              <div className={style.col_6}>
                <NavbarBrand>
                  <div className={style.logo}>
                    <span>PDP</span>
                    <img className={style.logo1} src={logo122} />
                    <img className={style.logo2} src={logo222} />
                    <h2>
                      St
                      <img src={vector22} />
                      rm
                    </h2>
                  </div>
                </NavbarBrand>
              </div>

              <div className={style.col_6}>
                <Dropdown>
                  <Dropdown.Toggle
                    className={style.btn}
                    variant=""
                    id="dropdown-basic"
                  >
                    Barcha kurslar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/course">
                      <BrowserRouter>
                        <Link  to="/course">
                          Course List
                        </Link>
                      </BrowserRouter>
                    </Dropdown.Item>
                  
                    <Dropdown.Item href="/cabinet/tutorial">
                      <BrowserRouter>
                        <Link  to="/cabinet/tutorial">
                         Full Course 
                        </Link>
                      </BrowserRouter>
                    </Dropdown.Item>

                    
                    <Dropdown.Item href="#/action-3">
                      Another Course
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    style={{ color: "#9DA7BB" }}
                    className={style.btn}
                    variant=""
                    id="dropdown-basic"
                  >
                    UZBEK
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Uzbek</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">English</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <BrowserRouter>
                  <Button className={style.but} href  ="/login"> 
                      KIRISH
                  </Button>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
