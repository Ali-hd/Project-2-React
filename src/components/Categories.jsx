import React, { Component } from 'react'
import axios from 'axios'
import CatValue from './CatValue'
import {Row} from 'react-bootstrap'

export default class Categories extends Component {

    state = {
        output: null,
        output2 : null
        }    
    
    componentDidMount = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.location.state.recipe}`)
        .then(response => {
            this.setState({output : response})
          console.log(response)
        })
        .catch(error => {
          //   console.log(this.state.error)
        })
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response2 => {
            this.setState({output2 : response2})
          console.log(response2)
        })
        .catch(error => {
          //   console.log(this.state.error)
        })
    }
    //I placed this because the images dont update when i choose another categorie while being in the same categorie 
    componentDidUpdate = () => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.location.state.recipe}`)
        .then(response => {
            this.setState({output : response})
          console.log(response)
        })
        .catch(error => {
          //   console.log(this.state.error)
        })
    }   
   
    render() {
        return (
            <div style={{marginTop: '70px'}}>
                <div>
                    <h1 style={{textAlign: 'center'}}>{this.props.location.state.recipe}</h1>
                    <hr style={{width : '80%'}}/>
                    {this.state.output2 !== null && <p style={{width: '80%', margin: '0 auto', textAlign: 'justify'}}>{this.state.output2.data.categories[this.props.location.state.id].strCategoryDescription}</p>}
                    <Row>
                    { this.state.output !== null && this.state.output.data.meals.map((value)=>{
                       return <CatValue food={value} />
                    })}
                    </Row>
                    
                </div>
            </div>
        )
    }
}


