import React, { Component } from 'react'
import Headers from "../../dashboard/pages/Bosh";
import Menyu1 from "./Head/Menyu";
import FootersGroup from "../../user_cabinet/pages/Footer";
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

