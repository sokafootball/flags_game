import React from 'react'
import './Guesses.css'
import Button from './Button'

const Guesses = (props) => {
  const radioBtns = props.options.map((option, index) => {
    return <div key={index} className="guess">
      <input
        type="radio"
        name="country"
        value={option.name}
        onChange={props.radioClick}
        checked={option.name === props.selectedOption}>
      </input>
      <label>{option.name}</label>
    </div>
  })
  return(
    <form className="guesses">
      {radioBtns}
      <Button guessColor={props.guessColor}/>
    </form>
  )
}

export default Guesses
