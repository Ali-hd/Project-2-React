import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

export default class CatValue extends Component {

    // state = {
    //     output : null
    // }

    // componentDidMount = () => {
    //     axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.idMeal}`)
    //     .then(response => {
    //         // this.setState({output : response.data.meals})
    //         console.log("yesyes")
    //         console.log(response.meals)
    //     })
    //     .catch(error => {
    //         // console.log(this.state.error)
            
    //     })
    // }
    render() {
        return (
            <div>
                <img src={this.props.food.strMealThumb} />
                <h3>{this.props.food.strMeal}</h3>
                <button>
                    <Link to={{ pathname: `/mealId/${this.props.food.idMeal}`, state: { recipe: this.props.food } }}>View More</Link>
                </button>
            </div>
        )
    }
}
