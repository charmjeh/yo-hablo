import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('제목이 렌더링되어야 한다.', () => {
    render(<Home />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })
})