import React from 'react'
import './Guesses.css'

const Guesses = ({options}) => {
  const radioBtns = options.map((option, index) => {
    return <div>
      <input
        type="radio"
        key={index}
        name="country"
        value={option.name}>
      </input>
      <p>{option.name}</p>
    </div>
  })
  return(
    <div>
      {radioBtns}
    </div>
  )
}

export default Guesses
