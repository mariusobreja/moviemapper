import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Movie Mapper title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie Mapper/i);
  expect(linkElement).toBeInTheDocument();
});
