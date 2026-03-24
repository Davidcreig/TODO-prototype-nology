import React from 'react'

const Button = ({title, handlePress}) => {
  return (
    <button onClick={handlePress}>{title}</button>
  )
}

export default Button