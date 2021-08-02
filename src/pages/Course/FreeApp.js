import React, { Component } from "react";
import Main2 from "./pages/Main2";
import Navbar from '../dashboard/pages/Bosh'
import Main1 from "./pages/Main1";
import About from "./pages/About";
import Footer from "../../pages/user_cabinet/pages/Footer";
import Card from './pages/Card1'
import { Col, Row } from "react-bootstrap";
import Main3 from "./pages/Main3";

export default class FreeApp extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <Row>
        <Col md={12} xs={12} lg={6} xl={3} ><Main1/></Col>
        <Col md={12} xs={12} lg={12} xl={6}><div><Main2/> 
        <About/></div></Col>
        <Col md={12} xs={12} lg={6} xl={3}><Card/></Col>
        <Col md={12} xs={12} lg={6} xl={3} ><Main3/></Col>
        
      </Row>
      <Footer/>
      </div>
    );
  }
}
