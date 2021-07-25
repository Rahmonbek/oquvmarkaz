import React, { Component } from 'react'
import Headers from "./Head/Headers";
import Menyu1 from "./Head/Menyu";
import FootersGroup from "./Head/FootersGroup";
export default class ExampleApp extends Component {
    render() {
        return (
            <div>
  <Headers />
<Menyu1 />
<FootersGroup />              
            </div>
        )
    }
}

