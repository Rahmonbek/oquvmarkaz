import React, { Component } from 'react'
import stayle5 from '../css/Navbar5.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, } from 'react-bootstrap';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import oq from '../img/oq.jpg'

export default class Bosh6 extends Component {
   
   
    render() {
        return (
            <div>
              <div className={stayle5.all}>
           <div className={stayle5.titler} style={{textAlign:'center',alignItems:'center'}}>Biz haqimizda boshqalar fikri</div>     
            
            <div className={stayle5.cor} style={{textAlign:'center'}}>
            

            <Carousel>

                <Carousel.Item>

                <img

                    className="d-block w-100"

                    src={oq}

                    alt="First slide"

                />

                <Carousel.Caption>

                <p style={{marginTop:'50px',color:'black',textAlign:'center',fontSize:'18px'}}>Ted Abbas</p>
                    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

                    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

                </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                <img

                    className="d-block w-100"

                    src={oq}

                    alt="Third slide"

                />

            

                <Carousel.Caption>
                <p style={{color:'black',textAlign:'center',fontSize:'18px'}}>Tahir</p>
                    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

                    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

                </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                <img

                    className="d-block w-100"

                    src={oq}

                    alt="Third slide"

                />

            

                <Carousel.Caption>

                    <p style={{color:'black',textAlign:'center',fontSize:'18px'}}>Ted Howard</p>
                    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

                    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

                </Carousel.Caption>

                </Carousel.Item>

            </Carousel>



</div>

   <div className={stayle5.title2}>Bizning hamkorlar</div>

            <div style={{display:'flex',paddingTop:'59px'}}>
        <div style={{paddingLeft:'40px'}} className={stayle5.logo1}><img alt="BigCo Inc. logo" src={logo1}/> </div>
        <div style={{paddingLeft:'40px'}}  className={stayle5.logo2}><img alt="BigCo Inc. logo" src={logo2}/></div>
        <div style={{paddingLeft:'40px'}}  className={stayle5.logo3}><img alt="BigCo Inc. logo" src={logo3}/></div>
        <div style={{paddingLeft:'40px'}}  className={stayle5.logo4}><img alt="BigCo Inc. logo" src={logo4}/></div> </div>
            </div></div>
        )
    }
}
