import React from 'react'
import styles from "./Button.module.css"

const Button = ({title, handlePress}) => {
  return (
    <button className={styles.button} onClick={handlePress}>{title}</button>
  )
}

export default Button