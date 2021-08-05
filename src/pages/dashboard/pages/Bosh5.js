import React, { Component } from "react";
import images2 from "../img/tasvir1.png";
import images3 from "../img/tasvir2.png";

import stayle4 from "../css/Navbar4.module.css";
import { Container } from "react-bootstrap";

export default class Bosh5 extends Component {
  render() {
    return (
      <div>
        <div className={stayle4.tasvir}>
          <Container>
            <div className={stayle4.TextMeCenter}>
              <p className={stayle4.standUpOpen}>,,</p>
              <p className={stayle4.standUpInText}>
                “O’z qalbing va ichki sezgingga ergashish uchun yetarlicha
                jur’atli bo’l. Zotan shu ikki tuyg’u sening aslida kim bo’lishni
                xoxlashingni aniq biladi.”
                <p className={stayle4.StivName}>Stiv Jobs</p>
              </p>
              <p className={stayle4.standUpClose}>,,</p>
            </div>
          </Container> 

         
        </div>
      </div>
    );
  }
}
