import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  console.log(props)
  let flagView = <div>Loading Flag Image...</div>
  if(props.options.length){
    console.log(props.options)
    const correctFlag = props.options.find(option => option.isCorrect).flag
    flagView = <Flag image={correctFlag}/>
  }
  return(
    <div>
      <Guesses/>
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
