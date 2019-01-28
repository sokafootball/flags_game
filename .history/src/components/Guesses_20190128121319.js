import React from 'react'
import './Guesses.css'

const Guesses = ({options}) => {
  const radioBtns = options.map((option, index) => {
    <input type="radio" id={index} value="country"
  })
  return(
    <div>

    </div>
  )
}

export default Guesses
