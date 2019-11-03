import React from 'react'



const Images = (props) => {
    const maap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div>
            <h6>ID: {props.food.idMeal}</h6>
            <h3>{props.food.strMeal}</h3>
            <img src={props.food.strMealThumb}/>
            <h5>Ingredients:-</h5>
            <p>
                {maap.map((elem,i)=>{
                     i = i+1
                // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                return <span>{props.food[`strIngredient${i}`]}-</span>
                })}
            </p>
            <p>{props.food.strInstructions}</p>

        </div>
    )
}

export default Images
