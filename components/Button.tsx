import React from 'react'
import styles from '../styles/Home.module.css';

interface ButtonProp {
  text: string;
}

const Button = ({ text }: ButtonProp) => {
  return (
    <button
      type="button"
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default Button
