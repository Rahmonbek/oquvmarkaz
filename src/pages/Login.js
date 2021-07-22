import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/Login.css'
export default class Login extends Component {
    state={
        login:false
    }

    loginParol=()=>{
        var email=document.getElementById('user').value
        var password=document.getElementById('pass').value

        if(email==='ittower01@gmail.com' && password==='ittower'){
            this.setState({
                login:true
            })
        }
    }
     
    render() {
        function openLoginInfo() {
          
                document.querySelector('.b-form').style.opacity="0.01"
              document.querySelector('.box-form').style.left="-37%"
              document.querySelector('.box-info').style.right="-37%"
           ;
        }
        
        function closeLoginInfo() {
            
                document.querySelector('.b-form').style.opacity="1"
                document.querySelector('.box-form').style.left="0px"
              document.querySelector('.box-info').style.right="-5px"
           
        }
        return (
            <div>
                {
                    this.state.login?<Redirect to="cabinet"/>:
<div className="loginparol">
               <div className='box'>
  <div className='box-form'>
    <div className='box-login-tab'></div>
    <div className='box-login-title'>
      <div className='i i-login'></div><h2 style={{marginTop:'15px'}}>Kirish</h2>
    </div>
    <div className='box-login'>
      <div className='fieldset-body' id='login_form'>
        <button onClick={openLoginInfo} className='b b-form i i-more' title='Mais Informações'></button>
        	<p className='field'>
          <label for='user'>E-MAIL</label>
          <input type='text' id='user' name='user' title='Username' />
          <span id='valida' className='i i-warning'></span>
        </p>
      	  <p className='field'>
          <label for='pass'>Parol</label>
          <input type='password' id='pass' name='pass' title='Password' />
          <span id='valida' className='i i-close'></span>
        </p>

          <label className='checkbox'>
            <input type='checkbox' value='TRUE' title='Meni eslab qol' /> Meni eslab qol
          </label>

        	<input type='submit' id='do_login' value='Kirish' onClick={this.loginParol} title='Get Started' />
      </div>
    </div>
  </div>
  <div className='box-info'>
					    <p><button onClick={closeLoginInfo} className='b b-info i i-left' title='Back to Sign In'></button><h3>Yordam kerak</h3>
    </p>
					    <div className='line-wh'></div>
    					<button  className='b-support' title='Parolni unutdim'> Parolni unutdim</button>
    <button  className='b-support' title='Contact Support'> Biz bilan bog'laning</button>
    					<div className='line-wh'></div>
    <button  className='b-cta' title='Sign up now!'> Akkaunt yaratish</button>
  				</div>
</div>


   

            </div>
                }
            </div>
        )
    }
}
