import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  let flagView = <div>Loading Flag Image...</div>
  if(props.options.length){
    const correctFlag = props.options.find(option => option.isCorrect).flag
    flagView = <Flag image={correctFlag}/>
  }
  return(
    <div className="game">
      <Guesses
        options={props.options}
        guessColor={props.guessColor}
        radioClick={props.radioClick}
        selectedOption={props.selectedOption}/>
      {flagView}
      <p>Score: {props.score}</p>
    </div>
  )
}

Game.defaultProps = {
  options: [],
  guessColor: () => {}
}

Game.propTypes = {
  options: PropTypes.array.isRequired,
  guessColor: PropTypes.func.isRequired
}

export default Game
