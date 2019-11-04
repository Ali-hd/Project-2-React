import React, { Component } from 'react'
import './App.css'
import Input from './components/Input'
import axios from 'axios'
import Images from './components/Images'


export default class App extends Component {

  state = {
    output: [],
    error: "Please enter a search"
    }

  FindRecipe = (e) => {
    const search = e.target.elements.searchResp.value
    e.preventDefault()
    console.log(search)
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response => {
          this.setState({output : response.data.meals})
          console.log(this.state.output)
      })
      .catch(error => {
          console.log(this.state.error)
          
      })
    }
  componentDidMount = () => {
      const json = localStorage.getItem("recipe")
      const recipes = JSON.parse(json)
      this.setState({output: recipes})
    }
  
  componentDidUpdate = () => {
      const local = JSON.stringify(this.state.output)
      localStorage.setItem("recipe", local);
      console.log("saved in local storage")
    }
  
  

  render() {

    return (
      <div>
      <Input FindRecipe = {this.FindRecipe} />
      {this.state.output !== null && <div>
        {this.state.output.map(hit =>{
               return <Images food={hit} key={hit.idMeal}/> 
            })} 
        </div>
      }
      {this.state.output == null && <h4> Please enter a correct search</h4>}
      </div>
    )
  }
}
