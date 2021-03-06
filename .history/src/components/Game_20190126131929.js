import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  console.log(props)
  let flagView = <div>Loading Flag Image...</div>
  if(props.options.length){
    console.log(`props in Game Component:${props.options[0].flag}`)
    flagView = <Flag image={props.options.filter(option => option.isCorrect)[0].flag}/>
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
  options: PropTypes.Array.isRequired
}

export default Game
