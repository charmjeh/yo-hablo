import React from 'react'
import { render, screen } from '@testing-library/react'
import InputContainer from '../components/InputContainer'

describe('InputContainer', () => {
  it('select box가 세 개 있어야 한다.', () => {
    render(<InputContainer />)

    const subjectOptions = screen.getByLabelText('subject-select');
    const verbOptions = screen.getByLabelText('verb-select');
    const tenseOptions = screen.getByLabelText('tense-select');

    expect(subjectOptions).toBeInTheDocument()
    expect(verbOptions).toBeInTheDocument()
    expect(tenseOptions).toBeInTheDocument()
  })

  it('확인 버튼이 존재한다', () => {
  });
})