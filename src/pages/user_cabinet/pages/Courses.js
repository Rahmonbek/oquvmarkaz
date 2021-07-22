import React, { Component } from 'react'
import style from '../css/Courses.module.css'
import filter from '../img/filter.png'
import squares from '../img/squares.png'
import list from '../img/list.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import button from '../img/button.png'
import { Col, Row } from 'react-bootstrap'

export default class Courses extends Component {

state={
    grid:true
}

grid=(a)=>{
    this.setState({
        grid:a
    })
}
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.navbar}>
                        <div className={style.search}>
                            <input placeholder="Kurslarim orasidan qidirish" />
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className={style.icons}>
                            <div className={style.filter}>
                            <img src={filter} />Filter
                            </div>
                            <img className={style.squares} onClick={()=>{this.grid(true)}} src={squares} />
                            <img className={style.list} onClick={()=>{this.grid(false)}} src={list} />
                        </div>
                    </div>
                </div>
                {
                    this.state.grid?<div className={style.container1}>
                    <card className={style.card}>
                    <img className={style.img} src={img1} />
                    <button className={style.btn}>Dasturlash</button>
                        <div className={style.card_body}>
                            <div  className={style.card_title}>Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni muvozanatlash</div>
                            <div style={{marginTop:'-20px'}} className={style.card_info}>
                                <div className={style.card_text}><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span>4.1  <span className={style.span}>(524)</span></span></div>
                                <div className={style.card_footer}>
                                    <div className={style.hajm}>
                                        <span>Kurs hajmi</span>
                                        <p>38 soat</p>
                                    </div>
                                    <div className={style.bolim}>
                                        <span>Kurs bo’limlari</span>
                                        <p>5 ta bo’lim</p>
                                    </div>
                                    <img src={button} />
                                </div>
                            </div>
                        </div>
                    </card>
                    <card className={style.card}>
                    <img className={style.img} src={img2} />
                    <button className={style.btn}>Dasturlash</button>
                        <div className={style.card_body}>
                            <div style={{color:'#536DFD'}} className={style.card_title}>Raspberry Pi dasturlash <br/> asoslari</div>
                            <div className={style.card_info}>
                                <div className={style.card_text} ><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span>4.1  <span className={style.span}>(524)</span></span></div>
                                <div className={style.card_footer}>
                                    <div className={style.hajm}>
                                        <span>Kurs hajmi</span>
                                        <p>38 soat</p>
                                    </div>
                                    <div className={style.bolim}>
                                        <span>Kurs bo’limlari</span>
                                        <p>3 ta bo’lim</p>
                                    </div>
                                    <img src={button} />
                                </div>
                            </div>
                        </div>
                    </card>
                    <div className={style.new}>
                        <div className={style.new_title}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h5>Yangi kurs qo’shish</h5>
                        </div>
                    </div>
                </div>:
                //fdfdfd
                <div className={style.container1}>
                <card className={style.card} style={{flex:'100%'}}>
                    <Row>
                        <Col lg={3}>
                        <img style={{width:'100%', height:'100px'}} src={img1} />
                
                        </Col>
                   <Col lg={5}>
                   <div  className={style.card_title}>Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni muvozanatlash</div>
                   <div className={style.card_text}><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span>4.1  <span className={style.span}>(524)</span></span></div>
                          
                   </Col>
                   <Col lg={3}>
                   <div className={style.card_footer}>
                                <div className={style.hajm}>
                                    <span>Kurs hajmi</span>
                                    <p>38 soat</p>
                                </div>
                                <div className={style.bolim}>
                                    <span>Kurs bo’limlari</span>
                                    <p>5 ta bo’lim</p>
                                </div>
                                <img src={button} />
                            </div>
                   </Col>
                    </Row>
                <button className={style.btn}>Dasturlash</button>
                 
                </card>
               
                <div className={style.new}>
                    <div className={style.new_title}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <h5>Yangi kurs qo’shish</h5>
                    </div>
                </div>
            </div>
                }
                <div className={style.cources_footer}  style={{flex:'100%'}}>
                <i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i>
                <span>Yuklanmoqda</span>
                </div>
            </div>
        )
    }
}
