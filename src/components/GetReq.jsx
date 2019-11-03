import React, { Component } from 'react'
import axios from 'axios'
import Images from './Images'


export default class GetReq extends Component {

    state = {
        output: [],
        error: ""
    }

        componentDidMount(){
            this.lunch()
        }
    
render() {
    return (
        <div>
            Image of food
            
                
        </div>
    )
}
}
