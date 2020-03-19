import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('displays a logo and search component', () => {
    const { getByText } = render(<Header
      news='news'
      searchQuery='chicken'
      setSearchQuery={jest.fn()}
    />);

    expect(getByText(/What's/i)).toBeInTheDocument();
    expect(getByText(/Search Now/i)).toBeInTheDocument();
  });
});
