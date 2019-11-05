import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Col, Row, Card} from 'react-bootstrap'
import axios from 'axios'


export default class LinkRoute extends Component {

    state={
        output : null
    }

    componentDidMount = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.location.state.recipe.idMeal}`)
            .then(response => {
                this.setState({output : response.data.meals[0]})
                console.log("yesyes")
                console.log(response)
                // console.log(response.meals)
            })
            .catch(error => {
                // console.log(this.state.error)
                
            })
    }

    render() {
        const maap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        const recipe = this.props.location.state.recipe

        

        console.log(recipe)
        return (
            <div style={{marginTop: '250px'}}> 

            {this.state.output == null && <div>
                <Card>
                    <Card.Title>
                         <h3>{recipe.strMeal}</h3>
                    </Card.Title>
                    <Row>
                        <Col className="cardrow"><img src={recipe.strMealThumb}/></Col>
                        <Col className="cardrow"><p style={{textAlign: 'justify'}}><span style={{fontWeight: 'bold'}}>Recipe Instructions: </span><br/>{recipe.strInstructions}</p></Col>
                    </Row>
                    <Row style={{margin: '0 auto'}}>
                    <h5>Ingredients:-</h5>
                        <p>
                            {maap.map((elem, i) => {
                                i = i + 1
                                // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                                return <span key={i}>{recipe[`strIngredient${i}`]}-</span>
                            })}
                        </p>
                    </Row>
                    <Row><a target="_blank" href={recipe.strYoutube}>Watch on youtube</a></Row>
                </Card>
            </div>}

      {/* ************************************************************************************** */}

            {this.state.output !== null && <div>           
            <Card>
                    <Card.Title>
                         <h3>{this.state.output.strMeal}</h3>
                    </Card.Title>
                    <Row>
                        <Col><img src={this.state.output.strMealThumb}/></Col>
                        <Col><p style={{textAlign: 'justify', marginRight: '40px'}}><span style={{fontWeight: 'bold'}}>Recipe Instructions: </span><br/>{this.state.output.strInstructions}</p></Col>
                    </Row>
                    <Row style={{margin: '0 auto'}}>
                    <h5>Ingredients:-</h5>
                        <p>
                            {maap.map((elem, i) => {
                                i = i + 1
                                // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                                return <span key={i}>{this.state.output[`strIngredient${i}`]}-</span>
                            })}
                        </p>
                    </Row>
                    <Row><a target="_blank" href={this.state.output.strYoutube}>Watch on youtube</a></Row>
                </Card>
            </div>}
            </div>
        )
    }
}
