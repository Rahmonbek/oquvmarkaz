import React, { Component } from 'react'
import { Nav, Navbar, } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';


export default class Bosh4 extends Component {
    render() {
        return (
            <div>


<Navbar bg="light" expand="lg">
 
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1"><NavLink   style={{textDecoration:'none',fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/dasturlash" >Dasturlash</NavLink> </Nav.Link>
      <Nav.Link href="#action1"><NavLink  style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}}to="/dizayn" >Dizayn</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink   style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/marketing" >Marketing</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink   style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/biznes" >Biznes</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink  style={{textDecoration:'none',  fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/salomatlik" >Salomatlik</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink  style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/menejment" >Menejment</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/buxgalteriya" >Buxgalteriya</NavLink></Nav.Link>
      <Nav.Link href="#action1"><NavLink style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/tarmoq" >Tarmoq</NavLink> </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


           </div>
        )
    }
}






 