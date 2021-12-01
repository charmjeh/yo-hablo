import React from 'react';
import styles from '../styles/Home.module.css';
import Option from './Option';

interface ParamProps {
  name: string;
  options: any;
  isDisabled: boolean;
}

const SelectItems = ({ name, options, isDisabled }: ParamProps) => {
  return (
    <div className={styles['select-box']}>
      <select
        id={name}
        name={name}
        aria-label={name}
        className={styles['native-select']}
        disabled={isDisabled}
      >
        {options.map(({ value, text }: any) => 
          <Option
            key={value}
            value={value}
            text={text}
          />
        )}
      </select>
      <div className={styles['select-box__arrow']}></div>
    </div>
  )
}

export default SelectItems
