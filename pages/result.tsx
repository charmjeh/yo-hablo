import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';

const Result: NextPage = function () {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* <h1 className={styles.title}>
          <strong>Yo</strong> habl<strong>o</strong>
        </h1> */}
        <p>넘겨받은 텍스트는 : {JSON.stringify(router.query.text)}</p>
      </div>
    </div>
  );
};

export default Result;
