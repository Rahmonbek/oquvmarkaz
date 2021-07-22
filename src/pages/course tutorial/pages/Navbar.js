import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import Ellipse from '../images/Ellipse.png'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={style.navbar}>
                    vvvvvvvvvvv
                    <img style={{marginLeft:'14px'}} src={Ellipse} alt="BigCo Inc. logo" />
                        
                </nav>

            </div>
        )
    }
}
