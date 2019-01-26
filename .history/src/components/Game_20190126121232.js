import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  if(props.options && props.options.length > 0){
    console.log(`props in Game Component:${props.options[0].flag}`)
  }
  return(
    <div>
      <Guesses/>
      <Flag image={props.options.filter(option => option.isCorrect)[0].flag}/>
      <h1>{props.options[0].name}</h1>
    </div>
  )
}

// Game.defaultProps = {
//   options: [
//     {name: '', flag: '', isCorrect: true},
//     {name: '', flag: '', isCorrect: true},
//     {name: '', flag: '', isCorrect: true},
//     {name: '', flag: '', isCorrect: true}
//   ]
// }

Game.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Game
