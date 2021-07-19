import React, { Component, useState } from 'react'
import {DropdownButton, Dropdown, Button } from 'react-bootstrap'
import style from '../css/Header.module.css'
import cx from 'classnames'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import vector from '../img/Vector.png'
import men from '../img/men.png'
import rocket from '../img/rocket.png';
import brain from '../img/brain.png';
import medal from '../img/medal.png';
import dk from '../img/dk.png';
import bell from '../img/bell.png';
import dots from '../img/dots.png';
import camera from '../img/camera.png';
import edit from '../img/edit.png';
import wifi from '../img/wifi.png';
import help from '../img/help.png';
import logout from '../img/logout.png';
import man1 from '../img/man1.png';
import man2 from '../img/man2.png';
import man3 from '../img/man3.png';
import right1 from '../img/right1.png';

function Header() {
        const [show, setShow] = useState(false);
        const[toggle,setToggle]=useState(false);
        const toggler=()=>{
            toggle?setToggle(false):setToggle(true); 
        }


        return (
            <div>
                <header>
                    <div className={style.header_top}>
                        <div className={style.container}>
                            <div className={style.col_6}>
                                <div className={style.logo}>
                                    <span>PDP</span><img className={style.logo1} src={logo1} /><img className={style.logo2} src={logo2} />
                                    <h2>St<img src={vector} />rm</h2>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle className={style.btn} variant="" id="dropdown-basic">
                                        Barcha kurslar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className={style.col_6}>
                                <Dropdown>
                                    <Dropdown.Toggle style={{color: '#9DA7BB'}} className={style.btn} variant="" id="dropdown-basic">
                                        UZBEK
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Uzbek</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">English</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button className={style.but}>KIRISH</Button>
                            </div>
                        </div>
                    </div>

                    <div className={cx(style.container, style.md)}>
                        <div className={style.men_info}>
                            <div className={style.men_img}>
                                <img  data-toggle="modal" data-target="#exampleModal"  src={men} />
                                <div className={style.camera}><img src={camera} /></div>
                            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog"  role="document">
                    <button type="button" class="close" data-dismiss="modal"  aria-label="Close">
                        <span style={{fontSize:'30px'}} aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>
                    </button>
                    <img style={{width:'400px',transform:'translate(50px)'}} src={men} />
                </div>
            </div>
                            <div className={style.men_title}>
                                <h2>To’rayev Ja’farbek</h2>
                                <p>Oddiy foydalanuvchi</p>
                                <h6>Mening belgilarim:</h6>
                                <div className={style.icons}>
                                    <a style={{background: '#ff004c3b'}} href="#"><img className={style.rocket} src={rocket} /></a>
                                    <a style={{background: '#f5ac0049'}} href="#"><img className={style.brain} src={brain} /></a>
                                    <a style={{background: '#536cfd48'}} href="#"><img className={style.medal} src={medal} /></a>
                                </div>
                            </div>
                        </div>
                        <div className={style.men_balance}>
                            <div className={style.balance}>
                                <h3>Joriy balans</h3>
                                <h2>1 350 000 <span>UZS</span></h2>
                                <div className={style.buttons}>
                                    <Button className={style.dk}><img src={dk} /></Button>
                                    <Button className={style.put}>Balans to’ldirish</Button>
                                </div>
                            </div>
                            <div className={style.balance_button}>
                                <img onClick={toggler} className={style.ii} src={bell} />
                                {
                                      toggle?
                                      <div className={style.card2}>
                                          <h3>BUGUN</h3>
                                          <div style={{background:'#ebecee77'}} className={style.card_item2}>
                                              <img src={man1}/>
                                              <div className={style.img_info2}>
                                                  <div className={style.img_title}>
                                                      <h6>Jennie Fox</h6>
                                                      <span></span><p>19:22</p>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                                              </div>
                                          </div>
                                          <div className={style.card_item2}>
                                              <img src={man2}/>
                                              <div className={style.img_info2}>
                                                  <div className={style.img_title}>
                                                      <h6>Jennie Fox</h6>
                                                      <p>19:22</p>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                                              </div>
                                          </div>
                                          <h3>06.08.2019</h3>
                                          <div className={style.card_item2}>
                                              <img src={man3}/>
                                              <div className={style.img_info2}>
                                                  <div className={style.img_title}>
                                                      <h6>Jennie Fox</h6>
                                                      <p>19:22</p>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                                              </div>
                                          </div>
                                          <a href="#">Barchasini ko’rish<img src={right1} /></a>
                                      </div>
                                      :null
                                }
                                <img  onClick={()=>setShow(!show)} className={style.ii} src={dots} />
                                {
                                   show?<div className={style.card}>
                                    <div className={style.card_item}>
                                        <img src={edit} />
                                        <h6>Profilni tahrirlash</h6>
                                    </div>
                                    <div className={style.card_item}>
                                        <img src={wifi}/>
                                        <h6>Bildirishnomalar</h6>
                                    </div>
                                    <div className={style.card_item}>
                                        <img src={help} />
                                        <h6>Yordam</h6>
                                    </div>
                                    <hr/>
                                    <div className={style.card_item}>
                                        <img src={logout} />
                                        <h6>Chiqish</h6>
                                    </div>
                                </div>:null
                                }
                            </div>
                        </div>
                    </div>
                </header>    
                
            </div>
        )
    }

export default Header;