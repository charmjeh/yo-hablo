import _ from 'lodash'
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { words } from '../db.js';
import styles from '../styles/Home.module.css';

const Result: NextPage = function () {
  const router = useRouter()
  const [keyword, setKeyword] = useState('전달받은 값이 없습니다')

  const getSearchedKeyword = () => {
    const source: any = router.query.search
    if (!source) return;

    const {
      subject,
      verb,
      tense
    } = JSON.parse(source);

    const searchedKeyword = _.find(words, ({
      subject_value,
      verb_value,
      tense_value
    }) => {
      return (
        subject_value === subject &&
        verb_value === verb &&
        tense_value === tense
      )
    });

    return searchedKeyword?.result_text;
  }

  useEffect(() => {
    const text: string = getSearchedKeyword() || ''
    setKeyword(text)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.description}>
          검색 결과는 아래와 같습니다 
        </p>

        <h1 className={styles.title}>
          {keyword}
        </h1>
      </div>
    </div>
  );
};

export default Result;
