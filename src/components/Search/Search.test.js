import React from 'react';
import Search from './Search';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Search', () => {
  it('Can update the search query', () => {
    const mockSetSearchQuery = jest.fn();
    const { debug, getByText, getByPlaceholderText } = render(
      <Search
        setSearchQuery={mockSetSearchQuery}
        value=''/>
      );

    const searchInput = getByPlaceholderText('Search for news article here');
    const searchButton = getByText('Search Now');

    fireEvent.change(searchInput, { target: { value: 'The Who' } });
    fireEvent.click(searchButton);

    expect(mockSetSearchQuery).toHaveBeenCalledWith('The Who');
  });
});
