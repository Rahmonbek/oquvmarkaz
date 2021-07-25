import React from "react";
import Group from "../../images/Group.png";
import Menyu from './Menyu'

import {
  Navbar,
  Container,
  Nav,
  Button,
  ControlLabel,
  Selection,
  Modal,
  FormGroup,
  FormControl,
  Form,
} from "react-bootstrap";


import styles from "../../Css/Headers.module.css";
import FootersGroup from "./FootersGroup";
import Dasturlash from "../Menu/Dasturlash";


export default function Headers() {
  return (
    <div>
      <Navbar className={styles.navbar} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Group} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <select
                className={styles.courseList}
                type="button"
                title="BARCHA KURSLAR"
                id="collasible-nav-dropdown"
              >
                <option>BARCHA KURSLAR</option>
                <option href="#dasturlash">Dasturlash</option>

                <option href="#marketing">Marketing</option>

                <option href="#biznes">Biznes</option>

                <option href="#buxgalteriya">Buxgalteriya</option>
              </select>
            </Nav>
            <Nav className={styles.selectLanguage}>
              
                <select
                  className={styles.language}
                  id="collasible-nav-dropdown"
                >
                  <option href="#action/3.2">RUS</option>

                  <option href="#action/3.3">ENG</option>

                  <option href="#action/3.4">UZBEK</option>
                </select>
             

              <button
                type="button"
                className={styles.Regsitration}
                href="#LogIn"
              >
                KIRISH
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.CourseHead}>
        <Container>
          <div className={styles.textSearch}>
            <div className={styles.BigText}>
              <h1>Bizning kurslar</h1>
            </div>
            <div className={styles.BigSearch}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="search"
                  placeholder="Qanday kurs o'rganmoqchisiz ?"
                  className={"fas fa-search"}
                />
              </Form.Group>{" "}
            </div>
          </div>
          <div className={styles.CourseMenu}>
           
        
          </div>
        </Container>
      </div>
      <div>
        
      </div>
    </div>
  );
}
