import { FC, useState } from 'react'
import {
  subjectOptions,
  verbOptions,
  tenseOptions,
} from '../../db.js';
import SelectBox from '../SelectBox';
import Button from '../Button';

const SearchContainer: FC = () => {
  const [subject, setSubject] = useState('yo');
  const [verb, setVerb] = useState('hablar');
  const [tense, setTense] = useState('indicative-present');

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
        to={{
          pathname: "/result",
          query: {
            search: JSON.stringify({
              subject,
              verb,
              tense
            })
          }
        }}
        children="결과 보기"
        backgroundColor="#4f9cf7"
        borderRadius="3px"
      />
    </>
  )
}

export default SearchContainer
