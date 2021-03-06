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
      selectedOption: 0,
      correctOption: ''
    }
    this.guessColor = this.guessColor.bind(this)
  }

  guessColor = (e) => {
    console.log(e)
    //if the color in the data is equal to the correct color
      //add 1 point
    //else
      //reset points to 0
    //generate a new set of options with a new flag
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

  pickCountries = () => {
    const correctOpionIndex = Math.floor(Math.random() * pickedCountries.length)
    let countriesCopy = this.state.countries.slice()
    let pickedCountries = []
    for (let i = 0; i < this.state.optionsNumber; i++){
      const randomIndex = Math.floor(Math.random() * countriesCopy.length)
      pickedCountries[i] = countriesCopy.splice(randomIndex, 1).pop()
    }
    pickedCountries = pickedCountries.map(country =>{
    return {...country, isCorrect: false}})
    pickedCountries[correctOpionIndex].isCorrect = true
    this.setState({options: pickedCountries, correctOption: pickedCountries[correctOpionIndex].name})
    console.log(this.state.correctOption)
  }

  render() {
    const gameView = this.state.options ? <Game options={this.state.options} guessColor={this.guessColor}/> : <div>Loading...</div>
    return (
      <div className="App">
        <Title />
        {gameView}
      </div>
    );
  }
}

export default App;
