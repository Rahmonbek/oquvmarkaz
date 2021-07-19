import React, { Component } from 'react'
import style from '../css/Knowledge.module.css'
import html from '../img/html.png'
import sass from '../img/sass.png'
import bootstrap from '../img/bootstrap.png'
import git from '../img/git.png'
import spring from '../img/spring.png'
import oracle from '../img/oracle.png'

export default class Knowledge extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.col_3}>
                            <div className={style.img_bg}>
                                <img src={html} />
                            </div>
                            <div className={style.img_info}>
                                <h5>HTML</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                        <div className={style.col_3}>
                            <div style={{background: 'rgba(205, 103, 153, 0.2'}} className={style.img_bg}>
                                <img src={sass} />
                            </div>
                            <div className={style.img_info}>
                                <h5>Sass</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                        <div className={style.col_3}>
                            <div style={{background: 'rgba(86, 61, 124, 0.2'}} className={style.img_bg}>
                                <img src={bootstrap} />
                            </div>
                            <div className={style.img_info}>
                                <h5>Bootstrap</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                        <div className={style.col_3}>
                            <div style={{background: 'rgba(222, 76, 54, 0.2'}} className={style.img_bg}>
                                <img src={git} />
                            </div>
                            <div className={style.img_info}>
                                <h5>GIT</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                        <div className={style.col_3}>
                            <div style={{background: 'rgba(16, 200, 160, 0.2'}} className={style.img_bg}>
                                <img src={spring} />
                            </div>
                            <div className={style.img_info}>
                                <h5>Spring</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                        <div className={style.col_3}>
                            <div style={{background: 'rgba(234, 27, 34, 0.2'}} className={style.img_bg}>
                                <img src={oracle} />
                            </div>
                            <div className={style.img_info}>
                                <h5>Oracle</h5>
                                <p>Lorem ipsum dolor sit<br/> amet, consectetur ar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
