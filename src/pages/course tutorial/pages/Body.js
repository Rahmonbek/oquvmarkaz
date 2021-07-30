import React from 'react'
import MenuBar from './Head/MenuBar'
import Navbar from './Navbar/Navbar'
import FooterMenuDi from './Footer/FooterMenuDi'
export default function Body() {
    return (
        <div >
            <Navbar/>
            <MenuBar/>
            <FooterMenuDi/>
        </div>
    )
}
