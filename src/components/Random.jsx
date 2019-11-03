import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Random extends Component {
    state={
        rand : [],
        error : null
    }

componentDidMount(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => {
        console.log(response)
        this.setState({rand : response.data.meals[0]})
        console.log(this.state.rand)
    })
    .catch(error => {
        console.log(error)

    })

}
   
    render() {
        const maap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        const recipe = this.state.rand
        return (
            <div>
                <button><Link to={{ pathname: `/`}}>Home Page</Link></button>
                <h3>{recipe.strMeal}</h3>
                <img src={recipe.strMealThumb}/>
                <h5>Ingredients:-</h5>
                <p>
                    {maap.map((elem, i) => {
                        i = i + 1
                        // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                        return <span key={i}>{recipe[`strIngredient${i}`]}-</span>
                    })}
                </p>
                <p>{recipe.strInstructions}</p>
                <a target="_blank" href={recipe.strYoutube}>Watch on youtube</a>
            </div>
        )
    }
}
