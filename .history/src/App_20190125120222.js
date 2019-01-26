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
      optionsNumber: 4
    }
  }

  componentDidMount(){
    const countriesAPI = 'https://restcountries.eu/rest/v2/all'
    fetch(countriesAPI)
      .then(data => data.json())
      .then(countries => this.setState({countries}))
      .catch(console.warn)
  }

  componentDidUpdate(){
    this.pickCountries()
  }

  pickCountries = () => {
    let countriesCopy = this.state.countries.slice()
    let pickedCountries = []
    for (let i = 0; i < this.state.optionsNumber; i++){
      const randomIndex = Math.floor(Math.random() * countriesCopy.length)
      pickedCountries[i] = countriesCopy.splice(randomIndex, 1)
    }
    pickedCountries = pickedCountries.map(country => ({...country, isCorrect: false}))
    console.log(Math.floor(Math.random() * pickedCountries.length))
    // pickedCountries[Math.floor(Math.random() * pickedCountries.length)].isCorrect = true
    this.setState({options: pickedCountries})
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Game countries={this.state.options}/>
      </div>
    );
  }
}

export default App;
