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
      selectedOption: '',
      correctOption: '',
      score: 0
    }
    this.guessColor = this.guessColor.bind(this)
    this.radioClick = this.radioClick.bind(this)
  }

  radioClick = (e) => {
    this.setState({selectedOption: e.target.value})
  }

  guessColor = (e) => {
    if (this.state.selectedOption === this.state.correctOption){
      console.log("Correct!")
      this.setState(prevState => {prevState.score++})
    } else {
      console.log("Wrong!")
      this.setState({score: 0})
    }
    this.pickCountries()
  }

  componentDidMount(){
    const countriesAPI = 'https://restcountries.eu/rest/v2/all'
    fetch(countriesAPI)
      .then(data => data.json())
      .then(countries => {
        return this.setState({countries}, this.pickCountries)
      })
      .catch(console.warn)
  }

  componentDidUpdate() {
    console.log(`Correct Option: ${this.state.correctOption}`)
    console.log(`Selected Option: ${this.state.selectedOption}`)
    console.log(`Score: ${this.state.score}`)
  }

  pickCountries = () => {
    let countriesCopy = this.state.countries.slice()
    let pickedCountries = []
    for (let i = 0; i < this.state.optionsNumber; i++){
      const randomIndex = Math.floor(Math.random() * countriesCopy.length)
      pickedCountries[i] = countriesCopy.splice(randomIndex, 1).pop()
    }
    pickedCountries = pickedCountries.map(country =>{
    return {...country, isCorrect: false}})
    pickedCountries[Math.floor(Math.random() * pickedCountries.length)].isCorrect = true
    this.setState({
      options: pickedCountries,
      correctOption: pickedCountries.find(country => country.isCorrect).name,
      selectedOption: pickedCountries[0].name
    })
  }

  render() {
    const gameView = this.state.options ? <Game options={this.state.options} guessColor={this.guessColor} radioClick={this.radioClick}/> : <div>Loading...</div>
    return (
      <div className="App">
        <Title />
        {gameView}
      </div>
    );
  }
}

export default App;
