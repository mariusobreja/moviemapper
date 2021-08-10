import { render, screen, act } from '@testing-library/react';
import App from '../App';

jest.mock('axios', () => {
  return {
    get: () => {
      return {
        data: [
          {
            _id: '1',
            username: 'usernameTest',
            title: 'titleTest',
            description: 'descriptionTest',
            rating: 3,
            latitude: 0,
            longitude: 0,
            createdAt: '2021-08-09T09:27:05.888Z',
            updatedAt: '',
            __v: 0
          }
        ]
      };
    }
  };
});

test('renders Movie Mapper title', async () => {
  jest.useFakeTimers();
  render(<App />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  const linkElement = await screen.findByText(/Movie Mapper/i);
  expect(linkElement).toBeInTheDocument();
});
