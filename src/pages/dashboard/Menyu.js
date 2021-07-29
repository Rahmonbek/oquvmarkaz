import React, { Component } from 'react'
import Bosh from './pages/Bosh'
import Bosh1 from './pages/Bosh1'
import Bosh2 from './pages/Bosh2'
import Bosh7 from '../user_cabinet/pages/Footer'
import Bosh4 from './pages/card/About'
import Bosh5 from './pages/Bosh5'
import Bosh6 from './pages/Bosh6'

export default class Menyu extends Component {
  render() {
    return (
      <div>
        <Bosh />
        <Bosh1 />
        <Bosh2 />
        <Bosh4 />
        <Bosh5 />
        <Bosh6 />
        <Bosh7/>      </div>
    )
  }
}

