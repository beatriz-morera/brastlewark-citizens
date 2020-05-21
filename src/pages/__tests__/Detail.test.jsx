import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import CitizensProvider from '../../components/CitizensProvider';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Detail from '../Detail';

const renderWithRouter = (component) => {
  let history;
  let location;
  const result = render(
    <MemoryRouter initialEntries={['/search/0']}>
      {component}
      <Route
        path="*"
        render={(ctx) => {
          if (history && location) {
            Object.assign(history, ctx.history);
            Object.assign(location, ctx.location);
          } else {
            history = ctx.history;
            location = ctx.location;
          }
          return null;
        }}
      />
    </MemoryRouter>
  );
  return { ...result, history, location };
};

describe('detail', () => {
  it('should renders correctly', async () => {
    expect.assertions(1);
    const { getByText } = renderWithRouter(
      <CitizensProvider>
        <Route path="/search/:id" component={Detail} />
      </CitizensProvider>
    );
    const citizen = await waitForElement(() => getByText(/Tobus/));

    expect(citizen).toBeInTheDocument();
  });

  it('should navigate on click', async () => {
    expect.assertions(1);

    const { getByText, location } = renderWithRouter(
      <CitizensProvider>
        <Route path="/search/:id" component={Detail} />
      </CitizensProvider>
    );
    const friend = await waitForElement(() => getByText(/Cogwitz/));

    fireEvent.click(friend);

    expect(location.pathname).toBe('/search/273');
  });
});
