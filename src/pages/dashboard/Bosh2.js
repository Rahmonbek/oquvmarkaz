import React, { Component } from 'react'
import { Card,Button, Container, Row, Col } from 'react-bootstrap'
import stayle1 from '../css/Navbar1.module.css'
import images1 from '../img/image1.png'
import images2 from '../img/image2.png'
import images3 from '../img/image3.png'
import images4 from '../img/image4.png'
import images5 from '../img/image5.png'


export default class Bosh2 extends Component {
  
  
  
  
  
  
    render() {
        return (
            <div>
               
               <div className={stayle1.sarlavha} >Bizning eng top kurslarimizni ko'rib chiqing</div>
<Container fluid="md"><Row lg={2} md={1} xs={1} style={{paddingTop:'60px'}}><Col style={{paddingBottom:'30px'}}>
   
    <Card className={stayle1.card1} >
  <Card.Img style={{height:'188px'}} variant="top" src={images1} />
  <Card.Body>
    <Card.Title className={stayle1.name1}>  Java, Spring bo’yicha to’liq 
kurs. (amaliy)</Card.Title>
    <Card.Text> 

<div className={stayle1.star1}>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <span>  4.1  (564) </span></div>
    
    <div className={stayle1.wb}>

   <div className={stayle1.wb1}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>

    <div className={stayle1.wb2}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
    </div>

     </div>

<div className={stayle1.card12}>Dasturlash</div>

 <Button variant="primary" style={{background: 'white'}} activeStyle={{background:'blue'}} className={stayle1.wb3}><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#9DA7BB',borderRadius:'50%'}}></i>
</Button>

    </Card.Text>
    
  </Card.Body>
</Card>
</Col>

<Col  style={{paddingBottom:'30px'}}>
<Card className={stayle1.card2} >  
  <Card.Img variant="top" style={{height:'188px'}} src={images2} />
  <Card.Body>
    <Card.Title className={stayle1.name2}>Illustrator boshlang’ichdan
proffessionalgacha</Card.Title>
    <Card.Text><div className={stayle1.star2}>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
<span>  4.1  (564) </span></div>
<div className={stayle1.wb}>
<div className={stayle1.wb1}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card13}>Dizayn</div>
 <Button variant="primary" style={{borderRadius:'50%', background: 'white'}}  className={stayle1.wb3}><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#9DA7BB',borderRadius:'50%'}}></i>
</Button>

</div>
    </Card.Text>
   
  </Card.Body>
</Card></Col></Row></Container>


<Container ><Row  lg={3} md={2} xs={1} ><Col  style={{paddingBottom:'30px'}}>
<div  className={stayle1.ycard1}>
<Card >
  <Card.Img variant="top" style={{height:'195px'}} src={images3} />
  <Card.Body>
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2}>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
<span>  4.1  (564) </span></div>
<div className={stayle1.wby}>
<div className={stayle1.wb1y}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2y}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card13}>Dizayn</div>
 <Button variant="primary" style={{borderRadius:'50%', background: 'white'}} activeStyle={{backgroundColor:'blue'}} className={stayle1.wb3y}><i class="fa fa-arrow-right" style={{color:'#9DA7BB',borderRadius:'50%'}} aria-hidden="true"></i>
</Button>
</div>

</Card.Text>
</Card.Body>
</Card>
</div></Col>



<Col  style={{paddingBottom:'30px'}}>
<div  className={stayle1.ycard2}>
<Card >
  <Card.Img  variant="top" style={{height:'195px'}}  src={images4} />
  <Card.Body >
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2}>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
<span>  4.1  (564) </span></div>
<div className={stayle1.wby}>
<div className={stayle1.wb1y}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2y}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card14}>Biznes</div>
 <Button variant="primary" style={{borderRadius:'50%', background: 'white'}} activeStyle={{color:'#010101'}}className={stayle1.wb3y}><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#9DA7BB',borderRadius:'50%'}}></i>
</Button>
</div>

</Card.Text>
</Card.Body>
</Card>
</div></Col>

<Col style={{paddingBottom:'30px'}}>
<div className={stayle1.ycard3}>
<Card  >
  <Card.Img  variant="top" style={{height:'195px'}}  src={images5} />
  <Card.Body>
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2}>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
<span>  4.1  (564) </span></div>
<div className={stayle1.wby}>
<div className={stayle1.wb1y}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2y}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card15}>Bugalteriya</div>
 <Button variant="primary" style={{borderRadius:'50%',background: 'white'}} activeStyle={{background:'blue'}} className={stayle1.wb3y}><i style={{color:'#9DA7BB',borderRadius:'50%'}} class="fa fa-arrow-right" aria-hidden="true"></i>
</Button>

</div>
</Card.Text>
</Card.Body>
</Card>
</div></Col></Row></Container>
            </div>
        )
    }
}
