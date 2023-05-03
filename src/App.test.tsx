import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the main app component', () => {
  const { getByTestId } = render(<App />);
  const appComponent = getByTestId('app-component');
  expect(appComponent).toBeInTheDocument();
});
