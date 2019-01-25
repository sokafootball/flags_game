import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  return(
    <div>
      <Guesses/>
      <Flag/>
    </div>
  )
}

Game.propTypes = {
  // image: PropTypes.string.isRequired
}

export default Game
