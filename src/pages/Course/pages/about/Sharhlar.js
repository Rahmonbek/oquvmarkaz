import React, {Component} from 'react'
import style from '../../css/Sharhlar.module.css'
import nigina from '../../images/nigina.png'
import rasmcha from '../../images/rasmcha.png'
import vector6 from '../../images/vector6.png'
import ReactStars from "react-rating-stars-component";
import Star1 from './Star1'
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import { Form } from 'react-bootstrap'
export default class Sharhlar extends Component{
    render(){
      const ratingChanged = (newRating) => {
        console.log(newRating);
      }; 
      
     
    

        return(
          <div style={{height:'auto'}}>
            <div className={style.sharh}>

               <h1 style={{paddingTop:'24px',paddingLeft:'24px'}}>Kurs reytingi</h1>

               <div className={style.baholash} style={{display:'flex',width:'100%'}}>
                   <div className={style.yulduz}>
                     <h2>4.1</h2><div style={{margin:'auto', display:'flex',paddingLeft:'20%', textAlign:'center',width:'137px',fontSize:'10px'}}>
   <ReactStars 
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></div>
                     <p>Jami: 524 ta ovoz</p>
                   
                   </div>  

                   
                   <div className={style.yulduzchalar} style={{width:'100%'}}>
                       <div className={style.yulduzcha} style={{paddingTop:'24px', marginTop:'14px'}}>
                         <i class="fa fa-star"></i>
                         <small style={{paddingRight:'10px'}}>5</small>
                         <Progress percent={100} showInfo={false} />
                         <small style={{paddingLeft:'10px'}}>100</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small style={{paddingRight:'10px'}}>4</small>
                         <Progress percent={400} status="active"  showInfo={false}/>
                         <small style={{paddingLeft:'10px'}}>400</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small style={{paddingRight:'10px'}}>3</small>
                         <Progress percent={20}   showInfo={false}/>
                         <small style={{paddingLeft:'10px'}}>20</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small style={{paddingRight:'10px'}}>2</small>
                         <Progress percent={4} status="exception"  showInfo={false}/>
                         <small style={{padingLeft:'10px'}}>4</small>
                       </div>
                       <div className={style.yulduzcha}>
                         <i class="fa fa-star"></i>
                         <small style={{paddingRight:'10px'}}>1</small>
                         <Progress style={{width:'100%'}} percent={0} status="exception"  showInfo={false}/>
                         <small style={{paddingLeft:'10px'}}>0</small>
                     </div>
                   </div>
               </div>

               
               <h6>Sharhlar</h6>
               <div className={style.karta} style={{display:'flex'}}>
                 <img src={nigina}/><div style={{display:'block'}}>
                 <h4 style={{paddingLeft:'30px'}}>Baxromova Nigina</h4>
                <div style={{display:'flex'}}> <p style={{paddingTop:'5px',paddingRight:'8px'}} >16-iyul. 2019</p>
                <ReactStars 
    count={5}
    onChange={ratingChanged}
    size={20}
    activeColor="#ffd700"
  /></div>
                 <p style={{color:'black',height:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>
ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> 
aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
               </div></div>
               <div className={style.picture} style={{display:'flex'}}>
                 <img src={rasmcha}/><div style={{display:'block'}}>
                 <h4 style={{paddingLeft:'30px'}}>Baxromov Baxrom</h4>
                <div style={{display:'flex'}}> <p style={{paddingTop:'5px',paddingRight:'8px'}} >16-iyul. 2019</p>
                <ReactStars 
    count={5}
    onChange={ratingChanged}
    size={20}
    activeColor="#ffd700"
  /></div>
                 <p style={{color:'black',height:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i<br/>
ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra<br/> 
aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. </p>
               </div></div>

           

               <a href='#'>+ Yana</a>
        </div>


<div className={style.izohingiz}>
                <div style={{display:'flex'}}> <img src={vector6}/>
                <Form style={{marginTop:'15px',marginLeft:'17px',border:'none'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Sharhlar" />
  </Form.Group></Form></div>
                 <Star1/>
               </div>
               <div className={style.otpravit}>
                 <button style={{marginLeft:'50%',width:'120px', height:'34px', color:'white', border:'none', backgroundColor:'#536DFD', borderRadius:'4px'}}>Jo'natish</button>
         



            </div> </div>
        )
    }
}