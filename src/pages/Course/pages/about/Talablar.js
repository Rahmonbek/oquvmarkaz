import React, {Component} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../../css/Talablar.module.css'
export default class Talablar extends Component{
    render(){
        return(<div>
            <Container >
                 <h1 style={{marginTop:'20px'}} >Talablar</h1>
                <Row lg={3} xs={1} md={2} style={{marginTop:'40px'}} >
                    <Col style={{display:'flex'}}>   <div className={style.circle} ></div> <p >Kompyuter saboqlarini bilish</p></Col>
                    <Col style={{display:'flex'}}>  <div className={style.circle}></div>
                                <p>Dasturlashga qiziqish</p></Col>
                    <Col style={{display:'flex'}}> <div className={style.circle}></div>
                                <p>Boshlang’ich ingliz tili</p></Col>
                    <Col style={{display:'flex'}}>  <div className={style.circle}></div>
                                <p>Shaxsiy noutbuk</p></Col>
                    <Col style={{display:'flex'}}>  <div className={style.circle}></div>
                                <p>Boshlang’ich java</p></Col>
                </Row>
            </Container>
            </div>
        )
    }
}