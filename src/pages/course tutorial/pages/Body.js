import React from 'react'
import MenuBar from './Head/MenuBar'
import Navbar from './Navbar/Navbar'
import FooterMenuDi from '../../user_cabinet/pages/Footer'
import { Col, Row } from 'react-bootstrap'
import Accardion from  './Head/AccordionGroup'
export default function Body() {
    return (
        <div >
            <Navbar/>
            <Row>
                <Col xl={8} lg={12} ><MenuBar style={{paddingBotton:'40px'}}/></Col >
                <Col xl={4} lg={10}> <Accardion/> </Col>
            </Row >
            <FooterMenuDi/>
        </div>
    )
}
