import React, { Component } from 'react'
import './App.css'
import Input from './components/Input'
import axios from 'axios'
import Images from './components/Images'
import {Jumbotron, Container} from 'react-bootstrap'

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
      setTimeout(function () {
        window.scrollTo({
          top: 500,
          left: -15000,
          behavior: 'smooth'
        });
      }, 1000);
    }
  componentDidMount = () => {
      const history = localStorage.getItem("recipe")
      const recipes = JSON.parse(history)
      this.setState({output: recipes})
    }
  
  componentDidUpdate = () => {
      const local = JSON.stringify(this.state.output)
      localStorage.setItem("recipe", local);
      console.log("saved in local storage")
    }
  
  

  render() {

    return (
      <div style={{marginTop: '31px'}}>\
      <article className="main-intro">
        <Jumbotron fluid>
          <Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Explore your tastes</h1>
            <p>
              Enjoy many recipes from around the world and learn how to make them. 
            </p>
            
          </Container>
        </Jumbotron>

        
      </article>
      <Input FindRecipe = {this.FindRecipe} />
      {this.state.output !== null && <div>
        <div className="row">
          {this.state.output.map(hit =>{
               return <Images food={hit} key={hit.idMeal}/> 
            })}
          
        </div>
        <button style={{margin: '15% auto', display:'block',backgroundColor: 'orange', color: 'black'}}><a href="#top">Back to Top</a></button>
        </div>
      }
      {this.state.output == null && <h4> Please enter a correct search</h4>}
      </div>
    )
  }
}
