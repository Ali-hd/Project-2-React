import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import App from '../App'
import LinkRoute from './LinkRoute'
import Random from './Random'
import ErrorPath from './ErrorPath'
import Navigate from './Navigate'

function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Navigate/>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path='/mealId' component={LinkRoute}/>
                <Route path='/RandomRecipe' component={Random}/>


                <Route component={ErrorPath}/>
            </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Routing