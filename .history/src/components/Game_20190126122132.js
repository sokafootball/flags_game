import React from 'react'
import './Game.css'
import Flag from './Flag'
import Guesses from './Guesses'
import PropTypes from 'prop-types'

const Game = (props) => {
  let flagView = <div>Loading Flag Image...</div>
  if(props.options && props.options.length > 0){
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
  options: [
    {name: '1', flag: '', isCorrect: true},
    {name: '2', flag: '', isCorrect: true},
    {name: '3', flag: '', isCorrect: true},
    {name: '4', flag: '', isCorrect: true}
  ]
}

Game.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Game
