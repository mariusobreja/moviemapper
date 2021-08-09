import { render, screen } from '@testing-library/react';
import Register from './register';
import userEvent from '@testing-library/user-event';

describe('Register component', () => {
  test('renders movie mapper title', () => {
    render(<Register setShowRegister={() => {}} />);

    const logo = screen.getByText(/movie mapper/i);
    expect(logo).toBeInTheDocument();
  });
});
