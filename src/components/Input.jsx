import React from 'react'
import { Button, FormControl} from 'react-bootstrap';

function Input(props) {
    return (
        <div>
            <form onSubmit={props.FindRecipe} className="input-field">
                
                    <FormControl type="text" name="searchResp" placeholder="Search for a recipe" className="mr-sm-2" />
                    <Button type="submit" variant="outline-secondary" block style={{color: 'black', fontWeight: 'bold'}}>Search Now!</Button>
                
            </form>
        </div>
    )
}

export default Input
