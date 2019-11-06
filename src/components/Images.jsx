import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import "../App.css"



const Images = (props) => {
    
    return (
        <div className="col-md-6 col-sm-12 mb-2" >
            
            <img style={{marginLeft:'auto', marginRight:'auto', display:'block'}} src={props.food.strMealThumb}/>
            <h3 style={{textAlign: 'center'}} className="images-info">{props.food.strMeal}</h3>
            <button style={{marginLeft:'auto', marginRight:'auto', display:'block'}} className="images-button">
                <Link to={{ pathname: `/mealId/${props.food.idMeal}`,state: {recipe: props.food}}}>View More</Link>
            </button>
            
        </div>
    )
}

export default Images


