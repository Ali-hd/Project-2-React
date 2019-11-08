import React from 'react'
import { Button, FormControl} from 'react-bootstrap';

function Input(props) {
    return (
        <div>
            <form onSubmit={props.FindRecipe} className="input-field">
                    <br/>
                    <FormControl type="text" name="searchResp" placeholder="Search for a recipe" style={{width:'100%'}}/>
                    <Button type="submit" variant="outline-secondary" block style={{color: 'black', fontWeight: 'bold', width: '70%', margin: '10px auto'}}>Search Now!</Button>
            </form>
        </div>
    )
}

export default Input

