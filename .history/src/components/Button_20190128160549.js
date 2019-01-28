import React from 'react'
import './Button.css'

const Button = (props) => {
  return(
    <button type="button" onClick={props.guessColor}>Try</button>
  )
}

export default Button
