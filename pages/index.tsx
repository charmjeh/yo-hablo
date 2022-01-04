import type { NextPage } from 'next';
import Head from 'next/head';
import SearchContainer from '../components/index/SearchContainer';
import styles from '../styles/Home.module.scss';

const Home: NextPage = function () {
  return (
    <div className={styles.container}>
    <Head>
      <title>Yo Hablo</title>
      <meta name="description" content="make easy to see tense changes" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <strong>Yo</strong> habl<strong>o</strong> el español
      </h1>

      <p className={styles.description}>
        헷갈리는 스페인어 동사 변화를
        <code className={styles.code}>Yo Hablo</code>
        와 함께 쉽게 확인해보세요
      </p>
      <div className={styles.card}>
        <SearchContainer />
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by eunhee with 
        <i className="icon icon--heart">💖</i>
      </a>
    </footer>
  </div>
  );
};

export default Home;
