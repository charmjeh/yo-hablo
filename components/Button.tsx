import Link from 'next/link'
import styles from '../styles/Home.module.css';
interface ButtonProp {
  pathname?: string,
  query?: any
  text: string;
}

const Button = ({ pathname, query = '', text }: ButtonProp) =>
  pathname ? (
    <Link href={{
      pathname: pathname,
      query: query
    }}>
      <button
        type="button"
        className={styles.button}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      className={styles.button}
    >
      {text}
    </button>
  )

export default Button;
