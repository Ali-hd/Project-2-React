import React, { Component } from 'react'
import axios from 'axios'
import CatValue from './CatValue'
import {Link} from 'react-router-dom'

export default class Categories extends Component {

    state = {
        output: null,
        output2 : null
        }    
    
    componentDidMount = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.location.state.recipe}`)
        .then(response => {
            this.setState({output : response})
          console.log(response)
        })
        .catch(error => {
          //   console.log(this.state.error)
        })
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response2 => {
            this.setState({output2 : response2})
          console.log(response2)
        })
        .catch(error => {
          //   console.log(this.state.error)
        })
    }
   
    render() {

        return (
            <div style={{marginTop: '70px'}}>
                <div>
                    <h1>{this.props.location.state.recipe}: </h1>
                    {this.state.output2 !== null && <p>{this.state.output2.data.categories[this.props.location.state.id].strCategoryDescription}</p>}
                    { this.state.output !== null && this.state.output.data.meals.map((value)=>{
                       return <CatValue food={value} />
                    })}
                    
                </div>
            </div>
        )
    }
}
