import type { NextPage } from 'next';
import Wrapper from '@/components/Wrapper';
import SearchContainer from '../components/index/SearchContainer';
import styles from '../styles/Home.module.css';

const Home: NextPage = function () {
  return (
    <Wrapper>
      <div className={styles.card}>
        <SearchContainer />
      </div>
    </Wrapper>
  );
};

export default Home;
