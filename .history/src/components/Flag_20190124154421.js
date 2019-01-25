import React from 'react'
import './Flag.css'
import PropTypes from 'prop-types'

const Flag = (props) => {
  const style = {
    // backgroundImage: `url(${props.image})`
  }

  return(
    <div className="flag">

    </div>
  )
}

Flag.propTypes = {
  image: PropTypes.string.isRequired
}

export default Flag
