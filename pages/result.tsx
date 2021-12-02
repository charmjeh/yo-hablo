import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Result: NextPage = function () {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          <strong>Yo</strong> habl<strong>o</strong>
        </h1>
      </div>
    </div>
  );
};

export default Result;
