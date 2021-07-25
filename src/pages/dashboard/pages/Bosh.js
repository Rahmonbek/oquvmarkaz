import React, { Component } from "react";
import style from "../css/Navbar.module.css";
import { Dropdown, Button } from "react-bootstrap";

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
          <div className={style.header_top}>
            <div className={style.container}>
              <div className={style.col_6}>
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
                <Dropdown>
                  <Dropdown.Toggle
                    className={style.btn}
                    variant=""
                    id="dropdown-basic"
                  >
                    Barcha kurslar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={style.col_6}>
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
                  <Button className={style.but}>
                    <Link style={{ color: "white" }} to="/login">
                      KIRISH
                    </Link>
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
