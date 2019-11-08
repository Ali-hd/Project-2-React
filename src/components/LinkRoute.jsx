import React, { Component } from 'react'
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
            <div style={{marginTop: '170px'}}> 

            {this.state.output == null && <div>
                <Card style={{width:'98%', margin:'0 auto'}}>
                    <Card.Title>
                         <h3  style={{textAlign: 'center', marginTop: '30px'}}>{recipe.strMeal}</h3>
                         <hr style={{width: '70%'}}/>
                    </Card.Title>
                    <Row>
                        <Col lg={true} className="card-image"><img style={{marginTop : '50px', marginBottom : '50px'}} src={recipe.strMealThumb}/></Col>
                        <Col lg={true}><p style={{textAlign: 'justify', marginRight: '3%',marginLeft:'1%', marginTop : '50px'}}><span style={{fontWeight: 'bold'}}>Recipe Instructions: </span><br/>{recipe.strInstructions}</p></Col>
                    </Row>
                    <Row className='card-ingredients'>
                    <h5>Ingredients:-</h5>
                        <p>
                            {maap.map((elem, i) => {
                                i = i + 1
                                // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                                return <span key={i}>{recipe[`strIngredient${i}`]}{recipe[`strIngredient${i}`] !== "" && "-"}</span>
                            })}
                        </p>
                    </Row>
                    <Row><a style={{marginTop: '70px', marginLeft: '47%', fontWeight: 'bold'}} target="_blank" href={recipe.strYoutube}>Watch on youtube</a></Row>
                </Card>
            </div>}

      {/* ************************************************************************************** */}

            {this.state.output !== null && <div>           
            <Card style={{width:'98%', margin:'0 auto'}}>
                    <Card.Title>
                         <h3 style={{textAlign: 'center', marginTop: '30px'}}>{this.state.output.strMeal}</h3>
                         <hr style={{width: '70%'}}/>
                    </Card.Title>
                    <Row>
                        <Col lg={true} className="card-image"><img style={{marginTop : '50px', marginBottom : '50px'}} src={this.state.output.strMealThumb}/></Col>
                        <Col lg={true}><p style={{textAlign: 'justify', marginRight: '3%',marginLeft:'1%', marginTop : '50px'}}><span style={{fontWeight: 'bold'}}>Recipe Instructions: </span><br/>{this.state.output.strInstructions}</p></Col>
                    </Row>
                    <Row className='card-ingredients'>
                    <h5>Ingredients:-</h5>
                        <p>
                            {maap.map((elem, i) => {
                                i = i + 1
                                // {props.food[`strIngredient${i}`] === "" ? "" : props.food[`strIngredient${i}`]=== null ? "" : "niether"}
                                return <span key={i}>{this.state.output[`strIngredient${i}`]}-</span>
                            })}
                        </p>
                    </Row>
                    <Row><a style={{marginTop: '70px', marginLeft: '47%', fontWeight: 'bold'}} target="_blank" href={this.state.output.strYoutube}>Watch on youtube</a></Row>
                </Card>
            </div>}
            </div>
        )
    }
}
