import React, { Component } from 'react'
import { Card,Button, Container, Row,Col } from 'react-bootstrap'
import stayle1 from '../../css/Navbar3.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import images3 from '../../img/image3.png'
import images4 from '../../img/image4.png'

export default class Biznes extends Component {
    render() {
        return (
            <div>
           <div style={{width:'100%', left:'0px',height:'689px' }}>            

<Container>
    <Row lg={3} md={1} xs={1}>
        <Col> <Card>
  <Card.Img variant="top"  style={{height:'250px'}}  src={images3} />
  <Card.Body>
    <Card.Title className={stayle1.name1}>  Java, Spring bo’yicha to’liq 
kurs. (amaliy)</Card.Title>
    <Card.Text>
<div className={stayle1.star1}>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}} aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{opacity:'0.7'}} aria-hidden="true"></i>
    <span>  4.1  (564) </span>
    <div className={stayle1.wb}>
<div className={stayle1.wb1}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card12}  style={{background:' #EB3B3B'}} >Biznes</div>
 <Button variant="primary" style={{borderRadius:'50%',background:'white'}} className={stayle1.wb3}><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#9DA7BB',borderRadius:'50%'}}></i>
</Button>
</div>
</div>
    </Card.Text>
    
  </Card.Body>
</Card></Col>
<Col> <Card  >
  <Card.Img variant="top"  style={{height:'250px'}}  src={images4} />
  <Card.Body>
    <Card.Title className={stayle1.name1}>  Java, Spring bo’yicha to’liq 
kurs. (amaliy)</Card.Title>
    <Card.Text>
<div className={stayle1.star1}>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}} aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:'gold',opacity:'0.7'}}  aria-hidden="true"></i>
    <i class="fa fa-star" style={{opacity:'0.7'}} aria-hidden="true"></i>
    <span>  4.1  (564) </span>
    <div className={stayle1.wb}>
<div className={stayle1.wb1}> 
    <h6>kurs hajmi</h6>
    <h3>38 soat</h3>
    </div>
<div className={stayle1.wb2}>
    <h6>kurs narxi</h6>
    <h3>250.000</h3>
</div>
<div className={stayle1.card12} style={{background:' #EB3B3B'}}>Biznes</div>
 <Button variant="primary" style={{borderRadius:'50%',background:'white'}} className={stayle1.wb3}><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#9DA7BB',borderRadius:'50%'}}></i>
</Button>
</div>
</div>
    </Card.Text>
    
  </Card.Body>
</Card></Col>

    </Row>
</Container></div>  
            </div>
        )
    }
}
