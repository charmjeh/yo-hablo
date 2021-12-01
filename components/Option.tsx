import React from 'react'

interface ParamProps {
  value: string;
  text: string;
}

const Option = ({ value, text }: ParamProps) => {
  return <option value={value}>{text}</option>
}

export default Option
