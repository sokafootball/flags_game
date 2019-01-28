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
      <label>{option.name}</label>
    </div>
  })
  return(
    <div className="guesses">
      {radioBtns}
    </div>
  )
}

export default Guesses
