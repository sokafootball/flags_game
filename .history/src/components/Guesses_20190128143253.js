import React from 'react'
import './Guesses.css'

const Guesses = (props) => {
  const radioBtns = props.options.map((option, index) => {
    return <div key={index}>
      <input
        type="radio"
        name="country"
        value={option.name}
        onChange={props.radioClick}>
      </input>
      <label>{option.name}</label>
    </div>
  })
  console.log(radioBtns[0])
  return(
    <form className="guesses">
      {radioBtns}
      <button type="button" onClick={props.guessColor}>Try</button>
    </form>
  )
}

export default Guesses
