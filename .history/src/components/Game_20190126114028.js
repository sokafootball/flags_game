import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  return(
    <div>
      <Guesses/>
      <Flag image={props.options.filter(option => option.isCorrect)[0].flag}/>
    </div>
  )
}

Game.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Game
