import type { NextPage } from 'next';
import Wrapper from '@/components/Wrapper';
import InputContainer from '../components/InputContainer';
import ResultContainer from '../components/ResultContainer';
import styles from '../styles/Home.module.css';

const Home: NextPage = function () {
  return (
    <Wrapper>
      <div className={styles.card}>
        <InputContainer />
      </div>
      <ResultContainer />
    </Wrapper>
  );
};

export default Home;
