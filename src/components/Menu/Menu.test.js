import React from 'react';
import Menu from './Menu';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Menu', () => {
  it('should render buttons if news articles exist', () => {
    const mockSetSearchQuery = jest.fn();
    const { debug, getByText } = render(
      <Menu
      news={{local: {}}}
      selectedMenu='local'
      handleChange={mockSetSearchQuery}
      />
    );

    expect(getByText('local')).toBeInTheDocument();
  });

  it('should render loading if no news items exist', () => {
    const mockSetSearchQuery = jest.fn();
    const { debug, getByText } = render(
      <Menu
      news={null}
      selectedMenu='local'
      handleChange={mockSetSearchQuery}
      />
    );

    expect(getByText('Loading ...')).toBeInTheDocument();
  });
});
