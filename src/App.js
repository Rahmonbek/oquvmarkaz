import React, { Component } from 'react'
import User from './pages/user_cabinet/User'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menyu from './pages/dashboard/Menyu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Menyu />
        <User />
      </div>
    )
  }
}
