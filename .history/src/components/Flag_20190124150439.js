import React from 'react'
import './Flag.css'
import PropType from 'prop-types'

const Flag = (props) => {
  const style = {
    background-image: '{props.image}'
  }

  return(
    <div className="flag">

    </div>
  )
}

Flag.PropType = {
  image: propTypes
}

export default Flag
