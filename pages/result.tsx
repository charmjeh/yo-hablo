import _ from 'lodash'
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { words } from '../db.js';
import styles from '../styles/Home.module.css';
import Button from '@/components/Button';

const Result: NextPage = function () {
  const router = useRouter()
  const [keyword, setKeyword] = useState('전달받은 값이 없습니다')

  useEffect(() => {
    const source: any = router.query.search
    if (!_.size(source)) return;

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
    })
    const text = searchedKeyword?.result_text || '';
    setKeyword(text)
  }, [])
  
  return (
    <div className={styles.container}>
      <Button
        to={{ pathname: '/' }}
        children="뒤로가기"
        position="fixed"
        top="20px"
        left="20px"
        borderRadius="35px"
        width="130px"
        height="45px"
        backgroundColor="black"
      ></Button>
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
