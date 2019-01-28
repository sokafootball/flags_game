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
      <label key={index}>{option.name}</label>
    </div>
  })
  console.log(radioBtns[0])
  return(
    <div className="guesses">
      {radioBtns}
    </div>
  )
}

export default Guesses
