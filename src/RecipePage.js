import React, { Component } from 'react';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes() {
    console.log('Rendered getRecipes()')
    const { recipes } = this.props;

    if (!recipes) {
      return <p><em>No recipes!</em></p>
    } else {
      return (
        <ul>
          {
            recipes.map(recipe => {
              console.log('Rendered a recipe');
              return <li>{recipe.title}</li>;
            })
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Recipe Page</h1>
        <p>Hi, welcome to ChrisCo's recipe page...take a look at these recipes!</p>
        <div className="recipes">
          {this.getRecipes()}
        </div>
      </div>
    );
  }
}

export default RecipePage;