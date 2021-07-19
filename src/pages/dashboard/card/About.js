import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dasturlash from './Dasturlash'
import Dizayn from './Dizayn'
import Marketing from './Marketing'
import Biznes from './Biznes'
import Salomatlik from './Salomatlik'
import Menejment from './Menejment'
import Buxgalteriya from './Buxgalteriya'
import Tarmoq from './Tarmoq'
import Bosh4 from '../Bosh4'
export default class About extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
       <Bosh4 />
       <Switch>
       <Route exact path="/dasturlash">
       <Dasturlash/>
                   </Route>
                   <Route exact path="/dizayn">
                       <Dizayn/>
                   </Route>
                   <Route exact path="/marketing">
                       <Marketing/>
                   </Route>
                   <Route exact path="/biznes">
                       <Biznes/>
                   </Route>
                   <Route exact path="/salomatlik">
                       <Salomatlik/>
                   </Route>
                   <Route exact path="/menejment">
                       <Menejment/>
                   </Route>
                   <Route exact path="/buxgalteriya">
                       <Buxgalteriya/>
                   </Route>
                   <Route exact path="/tarmoq">
                       <Tarmoq/>
                   </Route>
       </Switch> </BrowserRouter> 
            </div>
        )
    }
}
