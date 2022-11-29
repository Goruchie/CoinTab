import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import coinsStore from '../redux/configureStore';
import Home from '../components/Home';

describe('Home snapshot', () => {
  test('should render currency cards correctly', () => {
    render(
      <Router>
        <Provider store={coinsStore}>
          <Home />
        </Provider>
        ,
      </Router>,
    );
    const coins = document.querySelector('.coin-container');
    expect(coins).toBeTruthy();
  });
});
