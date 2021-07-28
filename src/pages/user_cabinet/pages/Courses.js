import React, { Component } from 'react'
import {Form, Check} from 'react-bootstrap'
import style from '../css/Courses.module.css'
import filter from '../img/filter.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import button from '../img/button.png'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


export default class Courses extends Component {

state={
    grid:true,
    showFilter:false
}

grid=(a)=>{
    this.setState({
        grid:a,
    })
}

openFilter=()=>{
    this.setState({
        showFilter:!this.state.showFilter
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
                            <div onClick={()=>{this.openFilter()}} className={style.filter}><img src={filter} />Filter</div>
                            {
                                this.state.showFilter?
                                    <div className={style.filter_menu}>
                                        <div className={style.type}>
                                            <h5>Tartiblash turlari</h5>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>Yangi kurslar</h6>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>Ko’p ko’rilganlar</h6>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>Eng baland narx</h6>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>Eng past narx</h6>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>A-Z bo’yicha</h6>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <h6>Z-A bo’yicha</h6>
                                            </div>
                                        </div>
                                        <div className={style.rate}>
                                            <h5>Reyting bo’yicha</h5>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <div className={style.App}><ReactStars {...thirdExample} /><h6>5.0</h6></div>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <div className={style.App}><ReactStars {...thirdExample} /><h6>4.0 dan yuqori</h6></div>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <div className={style.App}><ReactStars {...thirdExample} /><h6>3.0 dan yuqori</h6></div>
                                            </div>
                                            <div className={style.type_box}>
                                                <Form.Check aria-label="option 1" />
                                                <div className={style.App}><ReactStars {...thirdExample} /><h6>3.0 dan past</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                :null
                            }
                            <i class="fas fa-th-large" id="grid"  onClick={()=>{this.grid(true)}}></i>
                            <i class="fas fa-th-list"  id="list"  onClick={()=>{this.grid(false)}}></i>                            
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
                            <div className={style.card_title}>Raspberry Pi dasturlash <br/> asoslari</div>
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
