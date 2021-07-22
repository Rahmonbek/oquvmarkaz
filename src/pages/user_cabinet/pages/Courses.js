import React, { Component } from 'react'
import style from '../css/Courses.module.css'
import filter from '../img/filter.png'
import squares from '../img/squares.png'
import list from '../img/list.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import button from '../img/button.png'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


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
        const thirdExample = {
            size: 25,
            count: 5,
            isHalf: false,
            value: 4,
            color: "gray",
            activeColor: "yellow",
            onChange: newValue => {
              console.log(`Example 3: new value is ${newValue}`);
            }
          };
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
                                <div className={style.card_text}>       <div className="App">
      <ReactStars style={{fontSize:'10px'}} {...thirdExample} />
    </div><span>4.1  <span className={style.span}>(524)</span></span></div>
                                <div className={style.card_footer}>
                                    <div className={style.hajm}>
                                        <span>Kurs hajmi</span>
                                        <p>38 soat</p>
                                    </div>
                                    <div className={style.bolim}>
                                        <span>Kurs bo’limlari</span>
                                        <p>5 ta bo’lim</p>
                                    </div>
                                   <Link to="/cabinet/tutorial"> <img src={button} /></Link>
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
                                <div className={style.card_text} >       <div className="App">
      <ReactStars style={{fontSize:'10px'}} {...thirdExample} />
    </div><span>4.1  <span className={style.span}>(524)</span></span></div>
                                <div className={style.card_footer}>
                                    <div className={style.hajm}>
                                        <span>Kurs hajmi</span>
                                        <p>38 soat</p>
                                    </div>
                                    <div className={style.bolim}>
                                        <span>Kurs bo’limlari</span>
                                        <p>3 ta bo’lim</p>
                                    </div>
                                   <Link to="/cabinet/tutorial"> <img src={button} /></Link>
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
                <card className={style.card} style={{flex:'100%',height:'100%'}}>
                    <Row>
                        <Col lg={3}>
                        <img style={{width:'100%'}} src={img1} />
                
                        </Col>
                   <Col className={style.card_} lg={5}>
                   <div  className={style.card_title}>Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni muvozanatlash</div>
                   <div className={style.card_text}>       <div className="App">
      <ReactStars style={{fontSize:'10px'}} {...thirdExample} />
    </div><span>4.1  <span className={style.span}>(524)</span></span></div>
                          
                   </Col>
                   <Col className={style.card_} lg={3}>
                   <div style={{width:'120%'}} className={style.card_footer}>
                                <div className={style.hajm}>
                                    <span>Kurs hajmi</span>
                                    <p>38 soat</p>
                                </div>
                                <div className={style.bolim}>
                                    <span>Kurs bo’limlari</span>
                                    <p>5 ta bo’lim</p>
                                </div>
                                <img style={{transform:'translateY(25px)'}} src={button} />
                            </div>
                   </Col>
                    </Row>
                <button className={style.btn}>Dasturlash</button>
                 
                </card>
                <card className={style.card} style={{flex:'100%',height:'100%'}}>
                    <Row>
                        <Col lg={3}>
                        <img style={{width:'100%',height:'100%'}} src={img2} />
                
                        </Col>
                   <Col className={style.card_} lg={5}>
                   <div  className={style.card_title}>Raspberry Pi dasturlash <br/> asoslari</div>
                   <div className={style.card_text}>       
                   <div className="App">
      <ReactStars style={{fontSize:'10px'}} {...thirdExample} />
    </div><span>4.1  <span  className={style.span}>(524)</span></span></div>
                          
                   </Col>
                   <Col className={style.card_} lg={3}>
                   <div style={{width:'120%'}} className={style.card_footer}>
                                <div className={style.hajm}>
                                    <span>Kurs hajmi</span>
                                    <p>38 soat</p>
                                </div>
                                <div className={style.bolim}>
                                    <span>Kurs bo’limlari</span>
                                    <p>3 ta bo’lim</p>
                                </div>
                                <img style={{transform:'translateY(25px)'}} src={button} />
                            </div>
                   </Col>
                    </Row>
                <button className={style.btn}>Dasturlash</button>
                 
                </card>
               
                <div style={{width:'100%',height:'150px'}} className={style.new}>
                    <div style={{position:'relative',top:'50px',left:'0px'}} className={style.new_title}>
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
