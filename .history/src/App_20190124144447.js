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

  componentDidMount(){
    const countriesAPI = 'https://restcountries.eu/rest/v2/all'
    fetch(countriesAPI)
      .then(data => data.json())
      .then(result => {
        console.log(result)
        this.setState({countries: result})
       })
  }

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
