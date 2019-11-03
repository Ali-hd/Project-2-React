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

    lunch = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
        .then(response => {
            console.log(response);
            this.setState({output : response.data.meals})
            console.log(this.state.output)

        })
        .catch(error => {
            console.log(error)

        })

    }
    
render() {
    return (
        <div>
            Image of food
            {this.state.output.map(hit =>{
               return <Images food={hit} /> 
            })}
                
        </div>
    )
}
}
