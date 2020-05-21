import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, waitForDomChange, fireEvent, act, waitForElement } from '@testing-library/react';
import CitizensProvider from '../../components/CitizensProvider';
import Search from '../Search';

jest.mock('../../services/citizens');

describe('search', () => {
  it('should render', async () => {
    expect.assertions(1);
    const { asFragment } = render(
      <CitizensProvider>
        <HashRouter>
          <Search />
        </HashRouter>
      </CitizensProvider>
    );

    await waitForDomChange();
    expect(asFragment()).toMatchSnapshot();
  });
  it('search the list', async () => {
    expect.assertions(1);
    const { container, getByText } = render(
      <CitizensProvider>
        <HashRouter>
          <Search />
        </HashRouter>
      </CitizensProvider>
    );

    await waitForElement(() => getByText(/Tobus/));

    const searchInput = container.querySelector('input');
    const search = container.querySelector('button');

    fireEvent.change(searchInput, { target: { value: 'Tobus' } });
    fireEvent.click(search);
    await waitForDomChange();

    const items = container.querySelectorAll('li.ant-list-item');

    expect(items).toHaveLength(1);
  });
});
