import React from 'react';

import {
  render,
  waitForDomChange,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import App from '../App';

jest.mock('../services/citizens');

describe('app', () => {
  afterEach(cleanup);
  it('should render', async () => {
    expect.assertions(1);
    const { asFragment } = render(<App />);
    await waitForDomChange();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the home page', async () => {
    expect.assertions(1);
    const { getByTestId } = render(<App />);

    const homePage = await waitForElement(() => getByTestId('home-page'));

    expect(homePage).toBeInTheDocument();
  });

  it('should navigate to search page', async () => {
    expect.assertions(1);
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('search-link'));

    const searchPage = await waitForElement(() => getByTestId('search-page'));

    expect(searchPage).toBeInTheDocument();
  });
});
