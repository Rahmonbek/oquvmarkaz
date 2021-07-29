import React, { Component } from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/About'
import Main from './pages/Main'
export default class FreeApp extends Component {
    render() {
        return (
            <div>
             <Header />
              <Main />
             <About />
            

              <Footer /> 
            </div>
        )
    }
}
