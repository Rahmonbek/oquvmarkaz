import React, { Component } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';


export default class Bosh4 extends Component {
    render() {
        return (
            <div>
             <nav class="navbar navbar-expand-lg navbar-light" style={{backgrounColor: '#E5E5E5'}}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink   style={{textDecoration:'none',fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/dasturlash" >Dasturlash</NavLink> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink  style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}}to="/dizayn" >Dizayn</NavLink><span class="sr-only">(current)</span></a>
      </li>  
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink   style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/marketing" >Marketing</NavLink><span class="sr-only">(current)</span></a>
      </li>  
   
    <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink   style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/biznes" >Biznes</NavLink><span class="sr-only">(current)</span></a>
      </li>  
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink  style={{textDecoration:'none',  fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/salomatlik" >Salomatlik</NavLink><span class="sr-only">(current)</span></a>
      </li>  
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink  style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/menejment" >Menejment</NavLink><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/buxgalteriya" >Buxgalteriya</NavLink><span class="sr-only">(current)</span></a>
      </li>  
      <li class="nav-item active">
        <a class="nav-link" href="#"><NavLink style={{textDecoration:'none', fontSize:'22px',  color: '#9DA7BB'}}  activeStyle={{color:'#010101'}} to="/tarmoq" >Tarmoq</NavLink><span class="sr-only">(current)</span></a>
      </li>  
       </ul>  
  </div>
</nav>  
            </div>
        )
    }
}
