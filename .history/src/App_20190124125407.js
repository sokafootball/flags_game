import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Game from './components/Game'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: []
    }
  }

  compon
  render() {
    return (
      <div className="App">
        <Title />
        <Game />
      </div>
    );
  }
}

export default App;
