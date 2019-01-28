import React from 'react'
import './Guesses.css'

const Guesses = ({options}) => {
  const radioBtns = options.map((option, index) => {
    <input
    type="radio"
    id={index}
    name="country"
    value={option.name}>

  })
  return(
    <div>

    </div>
  )
}

export default Guesses
