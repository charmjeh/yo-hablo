import React from 'react';
import styles from '../styles/Home.module.css';
import Option from './Option';

interface ParamProps {
  name: string;
  value: string;
  options: any;
  isDisabled: boolean;
  handleOnchange: any;
}

const SelectBox = ({ name, options, isDisabled, handleOnchange }: ParamProps) => {
  return (
    <div className={styles['select-box']}>
      <select
        id={name}
        name={name}
        aria-label={name}
        className={styles['native-select']}
        disabled={isDisabled}
        onChange={handleOnchange}
      >
        {options.map(({ id, value, text }: any) => 
          <Option
            key={id}
            value={value}
            text={text}
          />
        )}
      </select>
      <div className={styles['select-box__arrow']}></div>
    </div>
  )
}

export default SelectBox
