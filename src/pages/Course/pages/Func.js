import React, { Component } from 'react'
import Func1 from './func/Func1'
import Func2 from './func/Func2'
import Func3 from './func/Func3'
export default class Func extends Component {
    render() {
        return (
            <div>
               <Func1 /> 
               <Func2 /> 
               <Func3 /> 
            </div>
        )
    }
}
