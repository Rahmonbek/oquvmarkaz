import React, { Component } from "react";
import "antd/dist/antd.css";
import style from "../../css/Card1.module.css";

import "@material-ui/core";

import FuncFour from "./FuncFour";
import { Button, Col, Row } from "react-bootstrap";
import img1 from "../../images/ellips1.png";
import img2 from "../../images/ellips2.png";
import img3 from "../../images/ellips3.png";
import img4 from "../../images/ellips4.png";


export default class Card1 extends Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <div className={style.cardall}>
          <div style={{ marginTop: "24px" }} className={style.dasturlash}>
            Dasturlash
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "20px",
              paddingTop: "104px",
            }}
          >
            <div style={{ display: "block" }}>
              <h6 style={{ opacity: "0.7" }}>kurs narxlari</h6>
              <h3 style={{ fontWeight: "600" }}>
                250.000
                <span
                  sytle={{
                    fontSize: "14px",
                    textAlign: "left",
                    fontWeight: "200",
                  }}
                >
                  {" "}
                  uzs
                </span>
              </h3>
            </div>
            <div style={{ display: "block", paddingLeft: "43px" }}>
              <h6 style={{ opacity: "0.7" }}>Kurs hajmi</h6>
              <h3 style={{ fontWeight: "600" }}>38 soat</h3>
            </div>
          </div>

          <div
            style={{
              paddingTop: "71px",
              fontSize: "18px",
              paddingLeft: "24px",
            }}
          >
            Kurs bo`limlari:
          </div>

          <FuncFour/>
        </div>
        <div style={{ marginTop: "42px" }} className={style.cardall}>
          <div className={style.title12}>
            <p
              style={{
                paddingTop: "24px",
                marginLeft: "24px",
                color: "#2E2E2E",
                fontSize: "18px",
              }}
            >
              Boshqa Mentorlar
            </p>
            <Button
              variant="light"
              style={{
                borderRadius: "50%",
                border: "1px solid #9DA7BB",
                marginTop: "20px",
                marginLeft: "30px",
                mardin: "auto",
                width: "40px",
                height: "40px",
              }}
            >
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </Button>
            <Button
              variant="light"
              style={{
                borderRadius: "50%",
                border: "1px solid #9DA7BB",
                marginTop: "20px",
                marginLeft: "30px",
                mardin: "auto",
                width: "40px",
                height: "40px",
              }}
            >
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Button>
          </div>
          <hr />

          <div style={{ paddingLeft: "24px" }} className={style.mentor}>
            <Row lg={2}>
              <Col>
                <div className={style.back1}>
                  <img src={img1} />
                  <div className={style.title24}> Abbas</div>
                  <div className={style.title23}>Arxitektor</div>
                </div>{" "}
              </Col>
              <Col>
                <div className={style.back2}>
                  <img src={img2} />
                  <div className={style.title24}>Tahir</div>
                  <div className={style.title23}>Traktorchi</div>
                </div>
              </Col>
              <Col>
                <div className={style.back3}>
                  <img src={img3} />
                  <div className={style.title24}>Mexmut</div>
                  <div className={style.title23}>Dizayner</div>
                </div>
              </Col>
              <Col>
                <div className={style.back4}>
                  <img src={img4} />
                  <div className={style.title24}>Tom Jonson</div>
                  <div className={style.title23}>Dasturlovchi</div>
                </div>
              </Col>
            </Row>
          </div>

          <div className={style.title45}>Barchasini ko’rish</div>
        </div>
      </div>
    );
  }
}
