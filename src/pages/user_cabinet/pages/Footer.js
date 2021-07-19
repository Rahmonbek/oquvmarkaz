import React, { Component } from 'react'
import style from '../css/Footer.module.css'
import payme from '../img/payme.png'
import click from '../img/click.png'
import cx from 'classnames'
import upay from '../img/upay.png'
import telegram from '../img/telegram.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className={style.footer_top}></div>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.col-3}>
                        <h4>Asosiy</h4>
                        <a href="#"><p>Loyiha haqida</p></a>
                        <a href="#"><p>Kurslar</p></a>
                        <a href="#"><p>Mentorlarga</p></a>
                        <a href="#"><p>Ommaviy oferta</p></a>
                        <a href="#"><p>Maxfiylik siyosati</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4>Qo’shimcha</h4>
                        <a href="#"><p>Bizning jamoa</p></a>
                        <a href="#"><p>Biz bilan hamkorlik</p></a>
                        <a href="#"><p>Bu qanday ishlaydi ?</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4>Qo’llab quvvatlash</h4>
                        <a href="#"><p>Eng ko’p beriladigan savollar</p></a>
                        <a href="#"><p>Kontakt</p></a>
                    </div>
                    <div className={style.col-3}>
                        <h4>To’lov turlari</h4>
                        <div className={style.payments}>
                            <img  src={payme} />
                            <img style={{marginLeft:'14px'}} src={click} />
                            <img style={{width:'48px',marginLeft:'14px'}} src={upay} />
                        </div>
                    </div>
                </div>
                <div className={style.row1}>
                    <div className={style.col-3}>
                        <div className={cx(style.payments,style.pay)}>
                            <a href="https://telegram.com" target="_blank"><img style={{width:'18px'}} src={telegram} /></a>
                            <a href="https://facebook.com" target="_blank"><img style={{width:'18px'}} src={facebook} /></a>
                            <a href="https://instagram.com" target="_blank"><img style={{width:'18px'}} src={instagram} /></a>
                            <a href="https://youtube.com" target="_blank"><img style={{width:'18px'}} src={youtube} /></a>
                        </div>
                    </div>
                    <div className={style.col-3}>
                        <p>100011, Toshkent sh. Shayxontohur tum.,<br/> Zarqaynar ko'ch., 3B-uy</p>
                        <button className={style.btn}>Biz bilan aloqa</button>
                    </div>
                </div>
                <p className={style.footer}>© 2019 storm.uz<div className={style.line}></div>Personel Development Process LLC<div className={style.line}></div>Foydalanish shartlari</p>
            </div>
            </div>
        )
    }
}
