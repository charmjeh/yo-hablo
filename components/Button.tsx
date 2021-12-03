import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

interface ButtonProp {
  to?: string;
  text: string;
  handleOnclick: any;
}

const Button = ({ to, text, handleOnclick }: ButtonProp) =>
  to ? (
    <Link href={{
      pathname: '/result',
      query: { text: to }
    }}>
      <button
        type="button"
        className={styles.button}
        onClick={handleOnclick}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      className={styles.button}
      onClick={handleOnclick}
      >
      {text}
    </button>
  )

export default Button;
