import React from 'react'
import './Game.css'
import Flag from './Flag'
import PropTypes from 'prop-types'

const Game = (props) => {
  return(
    <div>
      <Flag image={'https://restcountries.eu/data/afg.svg'}/>
    </div>
  )
}

Game.PropTypes = {
  image: PropTypes.string.isRequired
}

export default Game
