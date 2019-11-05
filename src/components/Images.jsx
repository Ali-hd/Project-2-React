import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import "../App.css"



const Images = (props) => {
    
    return (
        <div className="col-md-6 col-sm-2 mb-2">
            
            <img src={props.food.strMealThumb}/>
            <h3 className="images-info">{props.food.strMeal}</h3>
            <button className="images-button">
                <Link to={{ pathname: `/mealId/${props.food.idMeal}`,state: {recipe: props.food}}}>View More</Link>
            </button>
            
        </div>
    )
}

export default Images


