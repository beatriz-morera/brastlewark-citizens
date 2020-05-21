import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

describe('filter', () => {
  it('should renders correctly', () => {
    expect.assertions(1);
    const { getByTestId } = render(<Filter />);
    const searchbar = getByTestId('searchbar');
    expect(searchbar).toBeInTheDocument();
  });

  it('updates on Change', () => {
    expect.assertions(1);
    const changeHanlder = jest.fn();
    const { container } = render(<Filter onChange={changeHanlder} />);

    const searchInput = container.querySelector('input');
    fireEvent.change(searchInput, { target: { value: 'Tobus' } });
    const search = container.querySelector('button');
    fireEvent.click(search);

    expect(changeHanlder).toHaveBeenCalledWith('Tobus');
  });
});
