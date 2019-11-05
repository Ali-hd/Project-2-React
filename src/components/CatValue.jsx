import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class CatValue extends Component {

    render() {
        return (
            
            <div className="cat-value">
                
                <img src={this.props.food.strMealThumb}/>
                <h3 >{this.props.food.strMeal}</h3>
                <button >
                    <Link to={{ pathname: `/mealId/${this.props.food.idMeal}`, state: { recipe: this.props.food } }}>View More</Link>
                </button>
                
            </div>
            
        )
    }
}
