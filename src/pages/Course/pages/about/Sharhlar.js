import React, {Component} from 'react'
import style from '../../css/Sharhlar.module.css'
import nigina from '../../images/nigina.png'
import rasmcha from '../../images/rasmcha.png'
import vector6 from '../../images/vector6.png'
export default class Sharhlar extends Component{
    render(){
        return(
            <div className={style.sharh}>
               <h1>Kurs reytingi</h1>
               <div className={style.baholash}>
                   <div className={style.yulduz}>
                     <h2>4.1</h2>
                     <i style={{marginLeft:'45px'}} class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <p>Jami: 524 ta ovoz</p>
                   </div>
                   <div className={style.yulduzchalar}>
                       <div className={style.yulduzcha} style={{paddingTop:'24px', marginTop:'14px'}}>
                         <i class="fa fa-star"></i>
                         <small>5</small>
                         <div className={style.chiziq5}></div>
                         <small style={{marginLeft:'16px'}}>100</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small>4</small>
                         <div className={style.chiziq6}></div>
                         <small>400</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small>3</small>
                         <div className={style.chiziq7}></div>
                         <small style={{marginLeft:'16px'}}>20</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small>2</small>
                         <div className={style.chiziq8}></div>
                         <small style={{marginLeft:'16px'}}>4</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small>1</small>
                         <div className={style.chiziq9}></div>
                         <small style={{marginLeft:'16px'}}>0</small>
                       </div>
                   </div>
               </div>
               <h6>Sharhlar</h6>
               <div className={style.karta}>
                 <img src={nigina}/>
                 <h4>Baxromova Nigina</h4>
                 <p style={{marginTop:'-50px'}}>16-iyul. 2019</p>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <p style={{color:'black', marginTop:'-40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>
ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> 
aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
               </div>
               <div className={style.picture}>
               <img src={rasmcha}/>
                 <h4>To'rayev Anvar</h4>
                 <p style={{marginTop:'-50px'}}>18-iyul. 2019</p>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <p style={{color:'black', marginTop:'-40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>
ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> 
aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
               </div>
               <a style={{color:'#536DFD', textDecoration:'none', fontSize:'12px', marginLeft:'53px'}}>+ Yana</a>
               <div className={style.izohingiz}>
                 <img src={vector6}/>
                 <p>Sharhingiz</p>
                 <div className={style.chiziq11}></div>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <h6>O'rtacha</h6>
               </div>
               <div className={style.otpravit}>
                 <button style={{width:'120px', height:'34px', color:'white', border:'none', backgroundColor:'#536DFD', borderRadius:'4px'}}>Jo'natish</button>
               </div>
            </div>
        )
    }
}