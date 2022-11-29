import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import coinsStore from '../redux/configureStore';
import Detail from '../components/Home';

describe('Detail snapshot', () => {
  test('should render <Detail /> correctly', () => {
    const tree = render(
      <Provider store={coinsStore}>
        <Detail />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
