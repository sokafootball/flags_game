import React from 'react'
import './Game.css'
import Flag from './Flag'
import PropTypes from 'prop-types'

const Game = (props) => {
  return(
    <div>
      <Flag/>
    </div>
  )
}

Game.propTypes = {
  image: PropTypes.string.isRequired
}

export default Game
