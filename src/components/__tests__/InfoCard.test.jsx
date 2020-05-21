import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import InfoCard from '../InfoCard';

const renderWithRouter = (component) => {
  let history;
  let location;
  const result = render(
    <MemoryRouter>
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

describe('info-card', () => {
  it('should renders correctly', () => {
    expect.assertions(1);
    const { getByText } = renderWithRouter(<InfoCard name="John Doe" />);
    expect(getByText(/John/)).toBeInTheDocument();
  });

  it('should navigate on click', () => {
    expect.assertions(1);

    const { getByText, location } = renderWithRouter(<InfoCard id={1} name="John" />);

    fireEvent.click(getByText(/John/));

    expect(location.pathname).toBe('/search/1');
  });
});
