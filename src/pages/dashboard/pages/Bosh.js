import React, { Component } from 'react'
import stayle from '../css/Navbar.module.css'
import {Form,Nav,Navbar,Button} from 'react-bootstrap'
import storm from '../img/storm.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class Bosh extends Component {





    render() {
        return (
            <div>

<Navbar style={{position:'fixed',zIndex:'1',width:'100%',marginTop:'-10px'}} bg="white" expand="lg">
  <Navbar.Brand href="#"><img  alt="BigCo Inc. logo" style={{width:'98px',height:'45.2px'}} src={storm}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1"><div className={stayle.barcha}>
<Form.Control
        as="select"
        className={stayle.kurs}
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0" >BARCHA KURSLAR</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
</div></Nav.Link>   
    </Nav>
    <Form style={{  margin:'auto', marginRight:'10px', textAlign:'right' }} className="d-flex">
      <div className={stayle.til1}>
<Form.Control 
        className="mr-2"
        placeholder="Search"
        as="select"
        className={stayle.til2}
        id="inlineFormCustomSelect"
        custom
        
      >
        <option value="0" > UZBEK</option>
        <option value="1">ENGLISH</option>
        <option value="2">FREANCH</option>
        <option value="3">RUS TILI</option>
       
      </Form.Control> 
</div >
  <Button className={stayle.kirish} style={{ marginLeft:'40px', height: '28px',width: '97px',borderRadius: '4px',top:'10px',
color: '#FFFFFF',
backgroundColor: '#536DFD',
fontFamily: 'SF Pro Display',
fontSize: '10px',
textAlign: 'center'}}><Link style={{color:'white'}} to="/login">KIRISH</Link></Button >
    </Form>
  
  </Navbar.Collapse>
</Navbar>

             
            </div>
        )
    }
}
