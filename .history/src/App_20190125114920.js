import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Game from './components/Game'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      options: 4
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
    for (let i = 0; i < this.state.options; i++){
      const randomIndex = Math.floor(Math.random() * countriesCopy.length)
      pickedCountries[i] = countriesCopy.splice(randomIndex, 1)
    }
    pickedCountries = pickedCountries.map(country => {{...country, isCorrect: false})
    console.log(pickedCountries)
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
