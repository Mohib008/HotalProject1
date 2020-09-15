import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {


    render(){
        return(
            <header className="header">
                <h2><a href="e">Recipe App</a></h2>
                <nav>
                    <li><a href="e">New Recipe</a></li>
                    <li><a href="e">Home</a></li>
                    <li><a href="e">About</a></li>
                    <li><a href="e">Contect</a></li>
                </nav>
            </header>
        );
    }
}


export default Navbar;