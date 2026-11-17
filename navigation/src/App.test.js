import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/NavApp/i);
  expect(brandElement).toBeInTheDocument();
});
