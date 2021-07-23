import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import style from '../css/Certificate.module.css'
import certificate1 from '../img/certificate1.png'
import certificate2 from '../img/certificate2.png'

export default class Certificate extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.row}>
                        <Card className={style.card}>
                        <Card.Img variant="top" src={certificate1} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className={style.card}>
                        <Card.Img variant="top" src={certificate2} />
                            <Card.Body className={style.card_body}>
                               <div className={style.card_info}>
                               <Card.Title className={style.card_title}>Raspberry Pi dasturlash asoslari</Card.Title>
                                <Card.Text className={style.card_text}>
                                20-iyun, 2019 y
                                </Card.Text>
                               </div>
                                <button>Dasturlash</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
