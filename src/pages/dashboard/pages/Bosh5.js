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
  <img  style={{fontSize:'3vw',width:'7%',height:'7%' , paddingLeft:'4%'}} src={images2}/>             
 <Container><div style={{color:'white', fontSize:'3vw'}}>“O’z qalbing va ichki sezgingga ergashish uchun 
yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u 
sening aslida kim bo’lishni xoxlashingni aniq biladi.”</div></Container>

<img style={{fontSize:'3vw',width:'7%',height:'7%', position:'absolute',right:'10px',bottom:'20px' }} src={images3}/>
<div  style={{color:'white', fontSize:'3vw'}} >Stiv Jobs</div>

                 </div>   
            </div>
        )
    }
}
