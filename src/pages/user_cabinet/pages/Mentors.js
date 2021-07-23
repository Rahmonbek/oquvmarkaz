import React, { Component } from 'react'
import style from '../css/Mentors.module.css'
import men1 from '../img/men1.png'
import men2 from '../img/men2.png'
import men3 from '../img/men3.png'
import men4 from '../img/men4.png'
import men5 from '../img/men5.png'

export default class Mentors extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={men1} />
                        <div className={style.men_info}>
                            <div className={style.men_title}>
                                <div className={style.men_name}>
                                    <h4>Dianne Henry</h4>
                                    <span>Java, Python developer</span>
                                </div>
                                <button>A’zolikni bekor qilish </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className={style.box}>
                        <img src={men2} />
                        <div className={style.men_info}>
                            <div className={style.men_title}>
                                <div className={style.men_name}>
                                    <h4>Esther Flores</h4>
                                    <span>Head designer</span>
                                </div>
                                <button>A’zolikni bekor qilish </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className={style.box}>
                        <img src={men3} />
                        <div className={style.men_info}>
                            <div className={style.men_title}>
                                <div className={style.men_name}>
                                    <h4>Shawn Warren</h4>
                                    <span>C# mentor, Project manager</span>
                                </div>
                                <button>A’zolikni bekor qilish </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className={style.box}>
                        <img src={men4} />
                        <div className={style.men_info}>
                            <div className={style.men_title}>
                                <div className={style.men_name}>
                                    <h4>Angel Mccoy</h4>
                                    <span>Biznez analitik</span>
                                </div>
                                <button>A’zolikni bekor qilish </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className={style.box}>
                        <img src={men5} />
                        <div className={style.men_info}>
                            <div className={style.men_title}>
                                <div className={style.men_name}>
                                    <h4>Ralph Edwards</h4>
                                    <span>Bosh buxgalter</span>
                                </div>
                                <button>A’zolikni bekor qilish </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
