import React from 'react'
import './Guesses.css'

const Guesses = ({options}) => {
  const radioBtns = options.map((option, index) => {
    return <input
      type="radio"
      id={index}
      name="country"
      value={option.name}>
    </input>
  })
  return(
    <div>
      {radioBtns}
    </div>
  )
}

export default Guesses
