import React, { Component } from 'react'
import images2 from '../img/tasvir1.png';
import images3 from '../img/tasvir2.png';

import stayle4 from '../css/Navbar4.module.css'
import { Container } from 'react-bootstrap';

export default class Bosh5 extends Component {
    
    
    render() {
        return (
            <div>
             <div style={{position:'relative'}} className={stayle4.tasvir}>
  <img  style={{fontSize:'3vw',width:'7%',height:'7%' , paddingLeft:'6%'}} src={images2}/>             
 <Container><div style={{color:'white', fontSize:'3vw',paddingLeft:'10%'}}>“O’z qalbing va ichki sezgingga ergashish uchun 
yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u 
sening aslida kim bo’lishni xoxlashingni aniq biladi.”</div></Container>

<img style={{fontSize:'3vw',width:'5%' , height:'6%', position:'absolute',right:'80px',bottom:'80px' }} src={images3}/>
<div  style={{color:'white', fontSize:'3vw',marginTop:'30px',paddingBottom:'50px',paddingLeft:'20%'}} >Stiv Jobs</div>

                 </div>   
            </div>
        )
    }
}
