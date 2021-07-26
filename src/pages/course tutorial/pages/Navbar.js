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
                    <div className="akkaunt" style={{ width:'220px',marginLeft:'700px', marginTop:'10px'}}>
                    <img style={{marginLeft:'5px', marginTop:'10px'}} src={Ellipse} alt="" />
                    <h3 className={style.titlep} style={{position: 'absolute',width: '125px',height: '19px',left: '1070px',top: '21px',fontFamily: 'SF Pro Display',fontSize: '16px',lineHeight: '19px',color: '#2E2E2E'}}>To’rayev Ja’farbek</h3>
                    <h4 className={style.titlep} style={{position: 'absolute',width: '103px',height: '14px',left: '1071px',top: '44px',fontFamily: 'SF Pro Display',fontSize: '12px',lineHeight: '14px',color: '#9DA7BB'}}>Oddiy foydalanuvchi</h4>


                    </div>
                        
                </nav>

            </div>
        )
    }
}
