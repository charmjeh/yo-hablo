import Link from 'next/link'
import styles from '../styles/Home.module.css';

interface ButtonProp {
  to?: {
    pathname: string,
    query?: any
  };
  text: string;
  handleOnclick: any;
}

const Button = ({ to, text, handleOnclick }: ButtonProp) =>
  to ? (
    <Link href={to}>
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
