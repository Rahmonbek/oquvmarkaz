import React, { Component } from 'react'
import { Col,Row } from 'react-bootstrap'
import stayle2 from '../css/Navbar2.module.css'
import vektor from '../../img/Vector.png';
import vektor1 from '../../img/vector1.png';
import vektor2 from '../../img/Vector2.png';
import vektor3 from '../../img/Vector3.png';
import vektor4 from '../../img/Vector4.png';



import 'bootstrap/dist/css/bootstrap.min.css'
export default class Bosh3 extends Component {
    
    
    
    
    
    
    render() {
        return (
        <div>
           
            
                <div className={stayle2.bosh}>

<div className={stayle2.title}>Top kategoriyalar</div>
<div className={stayle2.barchasi}>Barchasi</div><Row style={{marginTop:'60px',marginBottom:'60px',marginRight:'60px',marginLeft:'60px', textAlign:'center'}} lg={4} md={2} sm={1}><Col>
<div className={stayle2.c1}><i class="fa fa-television" style={{color: '#10C8A0',paddingRight:'15px'}} aria-hidden="true"></i>
Dasturlash</div></Col><Col>
<div className={stayle2.c2}><img src={vektor}  style={{width: '37px',height:'23px',paddingRight:'15px'}} alt="BigCo Inc. logo"></img>
Dizayn</div></Col><Col>
<div className={stayle2.c3}><img src={vektor1}  style={{width: '37px',height:'23px',paddingRight:'15px'}} alt="BigCo Inc. logo"></img>
Biznes</div></Col><Col>
<div className={stayle2.c4}><img src={vektor2} style={{width: '37px',height:'23px',paddingRight:'15px'}} alt="BigCo Inc. logo"></img>
Bugalteriya</div></Col><Col>
<div className={stayle2.c5}><i class="fa fa-line-chart" style={{color: '#10C8A0',paddingRight:'15px'}} aria-hidden="true"></i>
Marketing</div></Col><Col>
<div className={stayle2.c6}><img src={vektor3} style={{width: '37px',height:'23px',paddingRight:'15px'}} alt="BigCo Inc. logo"></img>
Menejment</div></Col><Col>
<div className={stayle2.c7}><img src={vektor4} style={{width: '37px',height:'23px',paddingRight:'15px'}} alt="BigCo Inc. logo"></img>
Xavsizlik</div></Col><Col>
<div className={stayle2.c8}><i class="fa fa-heartbeat" style={{color: '#10C8A0',paddingRight:'15px',}} aria-hidden="true"></i>
Salomatlik</div></Col></Row>   
       
      
       </div>


        
           
        
                
   </div>
           
          
        )
    }
}
