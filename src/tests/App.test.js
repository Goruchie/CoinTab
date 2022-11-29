import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import coinsStore from '../redux/configureStore';

describe('App snapshot', () => {
  test('renders CURRENCIES text', () => {
    render(
      <Router>
        <Provider store={coinsStore}>
          <App />
        </Provider>
      </Router>,
    );
    const titleElement = screen.getByText(/CURRENCIES/i);
    expect(titleElement).toBeInTheDocument();
  });
});
