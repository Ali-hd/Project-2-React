import React from 'react'
import { Button, ButtonToolbar, Modal, Navbar, NavDropdown, FormControl, Form, Nav } from 'react-bootstrap';

function Input(props) {
    return (
        <div>
            {/* <form onSubmit={props.FindRecipe}>
                <input type="text" name="searchResp"/>
                <button>search</button>
            </form> */}
            <form onSubmit={props.FindRecipe}>
                
                    <FormControl type="text" name="searchResp" placeholder="Search for a recipe" className="mr-sm-2" />
                    <Button type="submit" variant="dark">Search</Button>
                
            </form>
        </div>
    )
}

export default Input
