import React from 'react'
import {Link} from 'react-router-dom'



const Images = (props) => {
    
    return (
        <div>
            <img src={props.food.strMealThumb}/>
            <h3>{props.food.strMeal}</h3>
            <button>
                <Link to={{ pathname: `/mealId/${props.food.idMeal}`,state: {recipe: props.food}}}>View More</Link>
            </button>
        </div>
    )
}

export default Images
