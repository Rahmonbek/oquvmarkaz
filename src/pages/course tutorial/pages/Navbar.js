import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import Ellipse from '../images/Ellipse (1).png'
import storm from '../images/storm.jpg'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={style.navbar}>

                
                    <img style={{marginLeft:'165px', marginTop:'10px'}} src={storm} alt="" />
                    <div className="akkaunt" style={{backgroundColor:'red', width:'220px',marginLeft:'700px',}}>
                    <img style={{marginLeft:'5px', marginTop:'10px'}} src={Ellipse} alt="" />


                    </div>
                        
                </nav>

            </div>
        )
    }
}
