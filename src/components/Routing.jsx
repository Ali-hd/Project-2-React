import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import App from '../App'
import LinkRoute from './LinkRoute'
import Random from './Random'
import ErrorPath from './ErrorPath'
import Navigate from './Navigate'
import Categories from './Categories'
import StartPage from './StartPage'

function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Navigate/>
            <Switch>
                <Route path="/home" component={App} exact/>
                <Route path='/mealId' component={LinkRoute}/>
                <Route path='/RandomRecipe' component={Random}/>
                <Route path='/categorie' component={Categories}/>
                <Route path='/' exact component={StartPage}/>


                <Route component={ErrorPath}/>
            </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Routing
