import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Game from './components/Game'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      options: [],
      optionsNumber: 4,
      updated: false
    }
  }

  componentDidMount(){
    const countriesAPI = 'https://restcountries.eu/rest/v2/all'
    fetch(countriesAPI)
      .then(data => data.json())
      .then(countries => this.setState({countries}, this.pickCountries))
      .catch(console.warn)
    // this.pickCountries()
  }

  pickCountries = () => {
    let countriesCopy = this.state.countries.slice()
    let pickedCountries = []
    for (let i = 0; i < this.state.optionsNumber; i++){
      const randomIndex = Math.floor(Math.random() * countriesCopy.length)
      pickedCountries[i] = countriesCopy.splice(randomIndex, 1)
    }
    pickedCountries = pickedCountries.map(country => ({...country, isCorrect: false}))
    pickedCountries[Math.floor(Math.random() * pickedCountries.length)].isCorrect = true
    this.setState({options: pickedCountries})
  }

  render() {
    console.log(`App.js Render method called`)
    let gameView = <div>Loading...</div>
    const {options} = this.state
    if (options[0] !== undefined){
      gameView = <Game options={this.state.options} />
      console.log(options)
    }
    return (
      <div className="App">
        <Title />
        {gameView}
      </div>
    );
  }
}

export default App;
