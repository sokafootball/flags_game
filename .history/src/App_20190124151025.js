import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Game from './components/Game'
import Flag from './components/Flag'

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
      .then(countries => {
        console.log(countries[0])
        this.setState({countries})
       })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Game />
        <Flag image={'https://restcountries.eu/data/afg.svg'}/>
      </div>
    );
  }
}

export default App;
