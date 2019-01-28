import React from 'react'
import './Guesses.css'

const Guesses = (props) => {
  const radioBtns = props.options.map((option, index) => {
    return <div key={index}>
      <input
        type="radio"
        name="country"
        value={option.name}>
      </input>
      <label>{option.name}</label>
    </div>
  })
  console.log(radioBtns[0])
  return(
    <div className="guesses">
      {radioBtns}
      <button type="button" onClick={() => {}}>Try</button>
    </div>
  )
}

export default Guesses
