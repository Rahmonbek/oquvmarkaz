import React, { Component } from 'react'
import style from '../css/Body.module.css'
import Path from '../images/Path.png'
import click from '../images/click.png'
import instagram from '../images/instagram.png'
import payme from '../images/payme.png'
import facebook from '../images/facebook.png'
import telegram from '../images/telegram.png'
import youtube from '../images/youtube.png'
import upay from '../images/upay.png'
// import Ellipse from '../images/Ellipse.png'


import Navbar from './Navbar'


export default class Bod extends Component {
    render() {        
        return (
            <div>
                <Navbar/>
               <div className={style.play}>
               <div className="playvideo" style={{position: 'absolute',width: '922px',height: '516px',left: '21px',top: '90px',background: '#2E2E2E',opacity: '0.4',borderRadius: '4px'}}>

               </div>
               </div>

               <div className={style.Rectangle}>
                   <div className="vnutri" style={{position: 'absolute',width: '400px',height: '980px',left: '960px',top: '86px',background: ' #FFFFFF',borderRadius: '4px' }}></div>
                   <div className="restangle" style={{position: 'absolute',width: '400px',height: '96px',left: '960px',top: '86px',background: '#FFFFFF',boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',borderRadius: '4px' }}>
                       <h4 className={style.title} style={{width: '214px',height: '48px',marginLeft: '24px',marginTop: '24px',fontSize:'20px',fontFamily: 'SF Pro Display',lineHeight: '24px', fontWeight:'bold', textAlign:'left'}}>Raspberry Pi dasturlash asoslari</h4>
                       <h5 className={style.title} style={{width: '75px',height: '40px',marginLeft: '300px',marginTop: '-54px',fontSize:'16px',fontFamily: 'SF Pro Display',lineHeight: '19px', fontWeight:'bold', textAlign:'right'}}>24 ta video <br/> 38 soat</h5>
                   <div className="line" style={{position: 'absolute', border:'1px solid #9DA7BB ',backgroundColor:'#9DA7BB', width: '39px',height: '0px',left: '250px',top: '48px',opacity: '0.5',border: '1px solid #9DA7BB',transform: 'rotate(90deg)'}}></div>  

                   </div>
               </div>

               <div className="zvezda">
                   <h4 className={style.title} style={{position: 'absolute',width: '338px',height: '29px',left: '17px',top: '630px',fontFamily: 'SF Pro Display',fontSize: '24px',lineHeight: '29px',color: '#2E2E2E',fontWeight:'bold',}}>Raspberry Pi dasturlash asoslari</h4>
                   <div className="zv1" style={{width:'200px', height:'50px', color:'yellow',left: '27px',top: '630px'}}><img src={Path}/></div>
                   <div className="Oldingi"><button style={{position: 'absolute',lineHeight: '14px', width: '100px',fontFamily: 'SF Pro Display',fontSize: '13px', height: '30px',left: '735px',top: '634px', border:'none', backgroundColor:'white',borderRadius: '4px', color:'black',boxShadow: '0px 1.5px 2px rgba(0, 0, 0, 0.08)'}}>Oldingi dars</button></div>
                   <div className="Keyingi"><button style={{position: 'absolute',lineHeight: '14px',width: '100px',fontFamily: 'SF Pro Display',fontSize: '13px', height: '30px',left: '845px',top: '634px', border:'none', backgroundColor:'white',borderRadius: '4px', color:'black',boxShadow: '0px 1.5px 2px rgba(0, 0, 0, 0.08)'}}>Keyingi dars</button></div>
               
               </div>

               <div className="akaunt">
                   <h3 className={style.title} style={{position: 'absolute',width: '141px',height: '17px',left: '80px',top: '677px',fontFamily: 'SF Pro Display',fontSize: '16px',lineHeight: '17px',color: '#595858'}}>Muhammad Jumayev</h3>
                   <div className="Obuna"><button style={{position: 'absolute',width: '90px',fontFamily: 'SF Pro Display',fontSize: '12px', height: '20px',left: '235px',top: '677px', border:'none', backgroundColor:'#536DFD',borderRadius: '2px', color:'white'}}>Obuna bo’lish</button></div>
                   
        


               </div>
               <div className={style.navUl} style={{marginTop:'700px', listStyleType: 'none', display:'flex', textAlighn:'center',fontFamily:'SF Pro Display',fontSize: '18px',lineHeight: '21px', width:'500px', height:'100px'}}>
                        <ul>
                            <li>
                                <a href='#savol'style={{ textDecoration:'none', color:'#9DA7BB',}}>Savol-javob</a>
                            </li>
                            
                            <li>
                                <a href='#vazifa'style={{ textDecoration:'none', color:'#9DA7BB',}}>Vazifalar</a>
                            </li>
                            
                            <li>
                                <a href='#qollanma'style={{ textDecoration:'none', color:'#9DA7BB',}}>Qo’llanmalar</a>
                            </li> 
                            
                            <li>
                                <a href='#skachat'style={{ textDecoration:'none', color:'#9DA7BB'}}>Ko’chirib olish uchun</a>
                            </li>

                            <li>
                                <a href='#Qoidalar'style={{ textDecoration:'none', color:'#FFD401'}}>Qoidalar</a>
                            </li>
                        </ul>
                    </div>
               

                   <div className={style.savol}>
                      
                           <div className={style.savolItem} style={{ width:'922px', height:'455px',position: 'absolute',left: '21px',background: 'white',borderRadius: '4px'}}>
                              
                               <div className={style.savolText} style={{ width:'580px', height:'200px', marginTop:'10px', marginLeft:'0px'}}>
                                   <h2 className={style.titleh2} style={{position: 'absolute',width: '141px',height: '20px',left: '88px',top: '37px',fontFamily: 'SF Pro Display',fontWeight:'bold', fontSize: '16px',lineHeight: '19px',color: '#2E2E2E'}}>To’rayev Jafarbek</h2>
                                   <p className={style.titlep} style={{position: 'absolute',width: '476px',height: '51px',left: '88px',top: '70px',fontFamily: 'SF Pro Display',fontSize: '14px',lineHeight: '17px',color: '#2E2E2E'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
                                   <h3 className={style.titleh3} style={{position: 'absolute',width: '70px',height: '15px',left: '102px',top: '137px',fontFamily: 'SF Pro Display', fontSize: '12px',lineHeight: '14px',color: '#536DFD'}}>Javob berish</h3>
                                   <h4 className={style.titleh4} style={{position: 'absolute',width: '70px',height: '15px',left: '181px',top: '137px',fontFamily: 'SF Pro Display', fontSize: '12px',lineHeight: '14px',color: '#9DA7BB'}}>16-iyul. 2019 </h4>
                               </div>

                               <div className={style.savolText} style={{ width:'580px', height:'200px', marginTop:'-20px', marginLeft:'0px'}}>
                                   <h2 className={style.titleh2} style={{position: 'absolute',width: '161px',height: '20px',left: '88px',top: '187px',fontFamily: 'SF Pro Display',fontWeight:'bold', fontSize: '16px',lineHeight: '19px',color: '#2E2E2E'}}>Muhammad Jumayev</h2>
                                   <p className={style.titlep} style={{position: 'absolute',width: '476px',height: '51px',left: '88px',top: '220px',fontFamily: 'SF Pro Display',fontSize: '14px',lineHeight: '17px',color: '#2E2E2E'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
                                   <h3 className={style.titleh3} style={{position: 'absolute',width: '70px',height: '15px',left: '102px',top: '287px',fontFamily: 'SF Pro Display', fontSize: '12px',lineHeight: '14px',color: '#536DFD'}}>Javob berish</h3>
                                   <h4 className={style.titleh4} style={{position: 'absolute',width: '70px',height: '15px',left: '181px',top: '287px',fontFamily: 'SF Pro Display', fontSize: '12px',lineHeight: '14px',color: '#9DA7BB'}}>16-iyul. 2019 </h4>
                               </div>

                               <div className={style.titleform}>
                               <form><textarea type="text"style={{width:'503px', height:'73px',border: '1px solid #9DA7BB',boxSizing: 'border-box', borderRadius: '4px', marginLeft:'40px', marginTop:'-36px'}}/></form> 
                               </div>


       

                           </div>
                           
                    </div>

                    <div className={style.all1} style={{  width:'1380px', height:'378px',position: 'absolute',left: '0px',background: 'white',top:'1344px'}}>
                 
            <div className={style.footer_top} style={{width: '100%',height: '40px',background: '#F1F2F6',}}></div>
            <div className={style.container} style={{width: '80%',margin:'auto',}}>
                <div className={style.row} style={{display: 'flex',alignItems: 'flex-start',flexDirection: 'row',justifyContent: 'space-between',marginTop: '40px',}}>
                    <div className={style.col-3}>
                        <h4 className={style.konesh4} style={{fontSize: '18px',lineHeight: '21px',color: '#2E2E2E',marginBottom: '29px',}}>Asosiy</h4>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Loyiha haqida</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Kurslar</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Mentorlarga</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Ommaviy oferta</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Maxfiylik siyosati</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4 className={style.konesh4} style={{fontSize: '18px',lineHeight: '21px',color: '#2E2E2E',marginBottom: '29px',}}>Qo’shimcha</h4>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Bizning jamoa</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Biz bilan hamkorlik</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Bu qanday ishlaydi ?</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4 className={style.konesh4} style={{fontSize: '18px',lineHeight: '21px',color: '#2E2E2E',marginBottom: '29px',}}>Qo’llab quvvatlash</h4>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Eng ko’p beriladigan savollar</p></a>
                        <a href="#" style={{textDecoration:'none'}}><p style={{fontSize: '14px',lineHeight: '17px',color: '#9DA7BB',}}>Kontakt</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4 className={style.konesh4} style={{fontSize: '18px',lineHeight: '21px',color: '#2E2E2E',marginBottom: '29px',}}>To’lov turlari</h4>
                        
                        <div className={style.payments} style={{display: 'flex',alignItems: 'center', justifyContent: 'center', background:'#F1F2F6',borderRadius: '4px',width: '220px', height: '41px',padding: '0 16px',}}>
                            <img  src={payme}  alt="BigCo Inc. logo" />
                            <img style={{marginLeft:'14px'}} src={click} alt="BigCo Inc. logo" />
                            <img style={{width:'48px',marginLeft:'14px'}} src={upay} alt="BigCo Inc. logo" />
                        </div>

                    </div>
                </div>
                <div className={style.row1} style={{display: 'flex',alignItems: 'flex-end',justifyContent: 'spaceBetween',}}>
                    <div className={style.col-3}>
                        <div className={style.payments} style={{  display: 'flex',alignItems: 'center',marginTop: '50px',}}>
                            <a href="https://telegram.com" target="_blank" ><img style={{width:'18px'}} src={telegram} alt="BigCo Inc. logo" /></a>
                            <a href="https://facebook.com" target="_blank"><img style={{width:'15px'}} src={facebook}  alt="BigCo Inc. logo" /></a>
                            <a href="https://instagram.com" target="_blank"><img style={{width:'18px'}} src={instagram} alt="BigCo Inc. logo" /></a>
                            <a href="https://youtube.com" target="_blank"><img style={{width:'18px'}} src={youtube} alt="BigCo Inc. logo" /></a>
                        </div>
                    </div>
                    <div className={style.col-3}>
                        <p style={{fontSize: '16px',lineHeight: '19px',color: '#2E2E2E',}}>100011, Toshkent sh. Shayxontohur tum.,<br/> Zarqaynar ko'ch., 3B-uy</p>
                        <button className={style.btn} style={{fontSize: '18px',lineHeight: '21px',textAlign: 'center',padding: '8px 44px 8px 45px',color: '#FFFFFF',border: 'none',background: '#9DA7BB',borderRadius: '4px',}}>Biz bilan aloqa</button>
                    </div>
                </div>
                <p className={style.footer} style={{fontSize: '10px',color: '#9DA7BB',marginTop: '39px',display: 'flex', alignItems: 'center',marginBottom: '16px',}}>
                    © 2019 storm.uz<div className={style.line} style={{margin: '0 14px',width: '1px',height: '8px',backgroundColor:'#9DA7BB',}}></div>
                Personel Development Process LLC<div className={style.line} style={{margin: '0 14px',width: '1px',height: '8px',backgroundColor:'#9DA7BB',}}></div>Foydalanish shartlari</p>
            </div></div>
                   
            
            {/* width: '30px',height: '30px',borderRadius: '50%'',backgroundColor:'#dbdbdbbd',display: 'flex',alignItems: 'center',justifyContent: 'center',marginRight: '20px', */}


















                       </div>


                   

         
        )
    }
}
