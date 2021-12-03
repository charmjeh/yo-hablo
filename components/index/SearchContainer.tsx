import _ from 'lodash'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import {
  subjectOptions,
  verbOptions,
  tenseOptions,
  words
} from '../../db.js';
import SelectBox from '../SelectBox';
import Button from '../Button';

const SearchContainer: FC = () => {
  const [subject, setSubject] = useState('yo');
  const [verb, setVerb] = useState('hablar');
  const [tense, setTense] = useState('indicative-present');
  const [keyword, setKeyword] = useState('')

  const searchSelects = [
    {
      name: 'subject-select',
      value: subject,
      options: subjectOptions,
      isDisabled: false,
    },
    {
      name: 'verb-select',
      value: verb,
      options: verbOptions,
      isDisabled: true,
    },
    {
      name: 'tense-select',
      value: tense,
      options: tenseOptions,
      isDisabled: true,
    },
  ];

  const handleOnchange = (name: string, e: any): void => {
    if (name === 'subject-select') setSubject(e.target.value)
    if (name === 'verb-select') setVerb(e.target.value)
    if (name === 'tense-select') setTense(e.target.value)
  }
  
  const showResult = () => {
    const text = _.find(words, ({
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
    const keyword_value = text?.result_text || ''
    setKeyword(keyword_value)
  }

  return (
    <>
      {searchSelects.map(({ name, value, options, isDisabled }: any) => 
        <SelectBox
          name={name}
          value={value}
          options={options}
          isDisabled={isDisabled}
          handleOnchange={(e: any) => handleOnchange(name, e)}
          key={name}
        />
      )}
      <Button
        to={keyword}
        text="결과 보기"
        handleOnclick={showResult}
      />
    </>
  )
}

export default SearchContainer
