import React, { Component } from 'react'
import stayle5 from '../css/Navbar5.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, } from 'react-bootstrap';
import logo1 from '../../img/logo1.png';
import logo2 from '../../img/logo2.png';
import logo3 from '../../img/logo3.png';
import logo4 from '../../img/logo4.png';

export default class Bosh6 extends Component {
   
   
    render() {
        return (
            <div><div className={stayle5.all}>
           <div className={stayle5.title}>Biz haqimizda boshqalar fikri</div>     
            
            <div className={stayle5.cor}>
            <Carousel variant="dark">
  <Carousel.Item>
    <div style={{width:'100%',height:'700px',backgroundColor:'#E5E5E5'}}>
    <Carousel.Caption><div style={{width:'705px',height:'270',backgroundColor:'white'}}>
      <h5 style={{display:'flex',alignItems:'center',paddingTop:'88px',color:'black',fontFamily:'SF Pro Display',fontSize: '20px'}} >First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption></div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-400"
      src={logo2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 >Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-400"
      src={logo1}
      alt="Third slide"
    /> 
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>

<div className={stayle5.title2}>Bizning hamkorlar</div>

            
        <div className={stayle5.logo1}><img alt="BigCo Inc. logo" src={logo1}/> </div>
        <div className={stayle5.logo2}><img alt="BigCo Inc. logo" src={logo2}/></div>
        <div className={stayle5.logo3}><img alt="BigCo Inc. logo" src={logo3}/></div>
        <div className={stayle5.logo4}><img alt="BigCo Inc. logo" src={logo4}/></div> 
            </div></div>
        )
    }
}
