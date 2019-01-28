import React from 'react'
import './Button.css'

const Button = (props) => {
  return(
    <button type="button" onClick={props.guessColor}>GUESS</button>
  )
}

export default Button
