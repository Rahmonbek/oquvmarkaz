import React, { Component } from 'react'
import images5 from '../../img/image5.png'
import { Card,Button, Container, Row,Col } from 'react-bootstrap'
import stayle1 from '../../css/Navbar3.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import images1 from '../../img/image1.png'
export default class Buxgalteriya extends Component {
    render() {
        return (
            <div>
            <div style={{width:'100%',height:'auto' }}>            

<Container>
    <Row lg={3} md={1} xs={1}>
        <Col> <Card style={{height:'430px'}}>
  <Card.Img variant="top" style={{height:'195px'}} src={images1} />
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
    <div className={stayle1.card12}  style={{background:'#FFE600'}} >Buxgaltriya</div>
    
    <div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'20px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div></div>
    </Card.Text>
    
  </Card.Body>
</Card></Col>
<Col> <Card style={{height:'430px'}}>
  <Card.Img variant="top" src={images5} style={{height:'195px'}}  />
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
    <div className={stayle1.card12} style={{background:'#FFE600'}}>Buxgalteriya</div>
    <div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'20px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div></div>
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    </Row>
</Container></div>  
            </div>
        )
    }
}
