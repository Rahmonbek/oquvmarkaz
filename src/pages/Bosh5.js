import React, { Component } from 'react'
import images1 from '../img/tasvir.png';
import images2 from '../img/tasvir1.png';
import images3 from '../img/tasvir2.png';

import stayle4 from '../css/Navbar4.module.css'

export default class Bosh5 extends Component {
    
    
    render() {
        return (
            <div>
             <div className={stayle4.tasvir}>
                <img src={images1} alt="BigCo Inc. logo" />
<div className={stayle4.text}>“O’z qalbing va ichki sezgingga ergashish uchun 
yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u 
sening aslida kim bo’lishni xoxlashingni aniq biladi.”</div>
<div className={stayle4.text1}><img src={images2} alt="BigCo Inc. logo" /></div>
<div className={stayle4.text2}><img src={images3} alt="BigCo Inc. logo" /></div>
<div className={stayle4.text3}>Stiv Jobs</div>

                 </div>   
            </div>
        )
    }
}