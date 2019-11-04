import { Button, ButtonToolbar, Modal, Navbar, NavDropdown, FormControl, Form, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

const categ = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast", "Goat"]
export default class Navigate extends Component {

    state={
        currentCat : null
    }

    

    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Tasty Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Watch Later</Nav.Link>
                    
                        <NavDropdown title="Categories" id="collasible-nav-dropdown" name="Categorie">
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[0]}`,state: {recipe: categ[0], id:0}}}>Beef</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[1]}`,state: {recipe: categ[1], id:1}}}>Chicken</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[2]}`,state: {recipe: categ[2], id:2}}}>Dessert</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[3]}`,state: {recipe: categ[3], id:3}}}>Lamb</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[4]}`,state: {recipe: categ[4], id:4}}}>Miscellaneous</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[5]}`,state: {recipe: categ[5], id:5}}}>Pasta</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[6]}`,state: {recipe: categ[6], id:6}}}>Seafood</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[7]}`,state: {recipe: categ[7], id:7}}}>Side</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[8]}`,state: {recipe: categ[8], id:8}}}>Starter</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[9]}`,state: {recipe: categ[9], id:9}}}>Vegan</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[10]}`,state: {recipe: categ[10], id:10}}}>Vegetarian</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[11]}`,state: {recipe: categ[11], id:11}}}>Breakfast</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={{ pathname: `/categorie/${categ[12]}`,state: {recipe: categ[12], id:12}}}>Goat</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    
                    </Nav>
                    <Nav>
                        <Nav.Link href="/RandomRecipe">Get a Random Recipe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
