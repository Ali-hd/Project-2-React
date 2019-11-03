import React from 'react'
import {Link} from 'react-router-dom'



const Images = (props) => {
    const maap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
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
