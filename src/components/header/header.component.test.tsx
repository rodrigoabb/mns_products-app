import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './header.component';

describe('<Header>', () => {
  it('Should display a header element', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Header />
      </Router>
    );
    expect(screen.queryByTitle('header')).toBeTruthy();
  });
});
