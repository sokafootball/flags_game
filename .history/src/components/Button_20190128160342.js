import React from 'react'

const Button = (props) => {
  return(
    <button type="button" onClick={props.guessColor}>Try</button>
  )
}

export default Button
