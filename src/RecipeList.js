import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';


class RecipeList extends Component {

    static propTypes = {
        reciepes: PropTypes.arrayOf(PropTypes.object)
    }

    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));

        return(
            <div className="RecipeList">
                {recipes}
            </div>
        );
    }
}


export default RecipeList;