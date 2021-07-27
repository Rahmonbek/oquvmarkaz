import React, { Component } from 'react'
import { Card,Button, Container, Row, Col } from 'react-bootstrap'
import stayle1 from '../css/Navbar1.module.css'
import images1 from '../img/image1.png'
import images2 from '../img/image2.png'
import images3 from '../img/image3.png'
import images4 from '../img/image4.png'
import images5 from '../img/image5.png'
import ReactStars from "react-rating-stars-component";

export default class Bosh2 extends Component {
  
  
 
  
  
  
  
    render() {
          const ratingChanged = (newRating) => {
        console.log(newRating);
      };  
        return (
            <div>
               
               <div className={stayle1.sarlavha} >Bizning eng top kurslarimizni ko'rib chiqing</div>
<Container fluid="md"><Row lg={2} md={1} xs={1} style={{paddingTop:'60px'}}><Col style={{paddingBottom:'30px'}}>
   
    <Card  className={stayle1.card1} >
  <Card.Img style={{height:'188px'}} variant="top" src={images1} />
  <Card.Body>
    <Card.Title className={stayle1.name1}>  Java, Spring bo’yicha to’liq 
kurs. (amaliy)</Card.Title>
    <Card.Text> 

<div className={stayle1.star1} style={{display:'flex'}}>
<ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    <span style={{paddingTop:'8px'}}>  4.1  (564) </span></div>
    <div className={stayle1.card12}>Dasturlash</div>
  
    <div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'40px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'90px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div className={stayle1.activebutton}>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div>

  

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
    <Card.Text><div className={stayle1.star2} style={{display:'flex'}}>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
<span style={{paddingTop:'8px'}}>  4.1  (564) </span></div>
<div className={stayle1.card13}>Dizayn</div>
<div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'40px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'90px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div className={stayle1.activebutton}>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div>

    </Card.Text>
   
  </Card.Body>
</Card></Col></Row></Container>


<Container ><Row  lg={3} md={2} xs={1} ><Col  style={{paddingBottom:'30px'}}>
<div  className={stayle1.ycard1}>
<Card style={{height:'430px'}}>
  <Card.Img variant="top" style={{height:'195px'}} src={images3} />
  <Card.Body>
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2} style={{display:'flex'}}>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
<span style={{paddingTop:'8px'}}>  4.1  (564) </span></div>
<div className={stayle1.card13}>Dizayn</div>
<div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'40px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div className={stayle1.activebutton}>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div>


</Card.Text>
</Card.Body>
</Card>
</div></Col>



<Col  style={{paddingBottom:'30px'}}>
<div  className={stayle1.ycard2}>
<Card style={{height:'430px'}}>
  <Card.Img  variant="top" style={{height:'195px'}}  src={images4} />
  <Card.Body >
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2} style={{display:'flex'}}>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
<span style={{paddingTop:'8px'}}>  4.1  (564) </span></div>
<div className={stayle1.card14}>Biznes</div>

<div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'40px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div className={stayle1.activebutton}>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div>

</Card.Text>
</Card.Body>
</Card>
</div></Col>

<Col style={{paddingBottom:'30px'}}>
<div className={stayle1.ycard3}>
<Card  style={{height:'430px'}}>
  <Card.Img  variant="top" style={{height:'195px'}}  src={images5} />
  <Card.Body>
    <Card.Title className={stayle1.title1}>Boshlang’ich Photoshop
kurslari</Card.Title>
    <Card.Text>
        <div className={stayle1.star2} style={{display:'flex'}}>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
<span style={{paddingTop:'8px'}}>  4.1  (564) </span></div>
<div className={stayle1.card15}>Bugalteriya</div>

<div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'40px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>370.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div className={stayle1.activebutton}>
<Button variant="light" style={{position:'absolute',right:'0px',bottom:'0px',borderRadius:'50%',maginRight:'24px',textAlign:'right',  border: '1px solid #9DA7BB',margin:'auto'}}><i class="fa fa-arrow-right" style={{color:'#9DA7BB'}} aria-hidden="true"></i></Button> 
    </div></div>



</Card.Text>
</Card.Body>
</Card>
</div></Col></Row></Container>
            </div>
        )
    }
}
