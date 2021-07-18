import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import User from './pages/user_cabinet/User'

export default class App extends Component {
  render() {
    return (
      <div>
        <User />
      </div>
    )
  }
}
