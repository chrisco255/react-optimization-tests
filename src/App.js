import React, { Component } from 'react';
import RecipePage from './RecipePage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [{ title: "1" }],
    };
  }

  addRandomRecipe() {
    const recipeCounter = this.state.recipes.length + 1;
    const newRecipe = { title: `${recipeCounter}`.repeat(recipeCounter) };

    this.setState({
      recipes: [...this.state.recipes, newRecipe],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={() => this.addRandomRecipe()}>Add Recipe</button>
        </header>
        <RecipePage recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
