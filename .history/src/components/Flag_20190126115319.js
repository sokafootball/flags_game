import React from 'react'
import './Flag.css'
import PropTypes from 'prop-types'

const Flag = (props) => {
  console.log(`image prop in flag: ${props.image}`)
  const style = {
    backgroundImage: `url(${props.image})`
  }

  return(
    <div className="flag" style={style}>

    </div>
  )
}

Flag.defaultProps = {
  image: "https://4vector.com/i/free-vector-pirate-flag-henry-every-clip-art_111962_Pirate_Flag_Henry_Every_clip_art_hight.png"
}

Flag.propTypes = {
  image: PropTypes.string.isRequired
}

export default Flag
