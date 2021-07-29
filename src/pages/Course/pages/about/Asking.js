import React, {Component} from 'react'
import style from '../../css/Talablar.module.css'
export default class Asking extends Component{
    render(){
        return(
            <div className={style.trebovaniya}>
                <h1 style={{fontSize:'18px'}}>Talablar</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4" style={{marginLeft:'-5px', paddingLeft:'5px', width:'200px'}}>
                            <div className={style.card1}>
                                <div className={style.circle} style={{marginLeft:'-2px'}}></div>
                                <p style={{marginLeft:'13px'}}>Kompyuter saboqlarini bilish</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={style.card1}>
                                <div className={style.circle}></div>
                                <p>Dasturlashga qiziqish</p>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{marginLeft:'5px'}}>
                            <div className={style.card1}>
                                <div className={style.circle}></div>
                                <p>Boshlang’ich ingliz tili</p>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{paddingLeft:'0px'}}>
                            <div className={style.card2}>
                                <div className={style.circle}></div>
                                <p>Shaxsiy noutbuk</p>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{marginLeft:'16px'}}>
                            <div className={style.card2}>
                                <div className={style.circle}></div>
                                <p>Boshlang’ich java</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}