import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, waitForDomChange, waitForElement } from '@testing-library/react';
import CitizensProvider from '../../components/CitizensProvider';
import Home from '../Home';

jest.mock('../../services/citizens');

describe('home', () => {
  it('should render', async () => {
    expect.assertions(1);
    const { asFragment } = render(
      <CitizensProvider>
        <HashRouter>
          <Home />
        </HashRouter>
      </CitizensProvider>
    );

    await waitForDomChange();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render citizens', async () => {
    expect.assertions(2);
    const { getByText } = render(
      <CitizensProvider>
        <HashRouter>
          <Home />
        </HashRouter>
      </CitizensProvider>
    );

    const citizen1 = await waitForElement(() => getByText(/Tobus/));
    const citizen2 = await waitForElement(() => getByText(/Malbin/));

    expect(citizen1).toBeInTheDocument();
    expect(citizen2).toBeInTheDocument();
  });
});
