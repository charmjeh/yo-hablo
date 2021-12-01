import React, { FC } from 'react'
import {
  subjectOptions,
  verbOptions,
  tenseOptions
} from '../db.js';
import SelectBox from './SelectBox';
import Button from './Button';

const InputContainer: FC = () => {
  return (
    <>
      <SelectBox
        name="subject-select"
        options={subjectOptions}
        isDisabled={false}
      />
      <SelectBox
        name="verb-select"
        options={verbOptions}
        isDisabled={true}
      />
      <SelectBox
        name="tense-select"
        options={tenseOptions}
        isDisabled={false}
      />
      <Button text="결과 보기" />
    </>
  )
}

export default InputContainer
