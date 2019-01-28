import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = ({options}) => {
  let flagView = <div>Loading Flag Image...</div>
  if(options.length){
    const correctFlag = options.find(option => option.isCorrect).flag
    flagView = <Flag image={correctFlag}/>
  }
  return(
    <div>
      <Guesses options={options}/>
      {flagView}
    </div>
  )
}

Game.defaultProps = {
  options: []
}

Game.propTypes = {
  options: PropTypes.array.isRequired
}

export default Game
