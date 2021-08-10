import { render, screen, cleanup } from '@testing-library/react';
import Info from './info';

const Pin = {
  _id: '',
  username: 'usernameTest',
  title: 'titleTest',
  description: 'descriptionTest',
  rating: 3,
  latitude: 0,
  longitude: 0,
  createdAt: '2021-08-09T09:27:05.888Z',
  updatedAt: '',
  __v: 0
};

describe('Info labels', () => {
  beforeEach(() => (Pin._id = '' + Math.random() * 100));

  test('renders pinLocation', () => {
    render(<Info pin={Pin} />);
    const pinLocation = screen.getByText(/location/i);
    expect(pinLocation).toBeInTheDocument();
  });

  test('renders pinMovie', () => {
    render(<Info pin={Pin} />);
    const pinMovie = screen.getByText(/movie/i);
    expect(pinMovie).toBeInTheDocument();
  });

  test('renders pinRatingMovie', () => {
    render(<Info pin={Pin} />);
    const pinRating = screen.getByText(/rating/i);
    expect(pinRating).toBeInTheDocument();
  });

  test('renders pinInformation', () => {
    render(<Info pin={Pin} />);
    const pinInformation = screen.getByText(/information/i);
    expect(pinInformation).toBeInTheDocument();
  });
});

describe('Info inputs', () => {
  beforeEach(() => (Pin._id = '' + Math.random() * 100));
  test('renders pinTitle', () => {
    render(<Info pin={Pin} />);
    const pinTitle = screen.getByText(/titleTest/i);
    expect(pinTitle).toBeInTheDocument();
  });

  test('renders pinDescription', () => {
    render(<Info pin={Pin} />);
    const pinDescription = screen.getByText(/descriptionTest/i);
    expect(pinDescription).toBeInTheDocument();
  });

  test('renders pinUsername', () => {
    render(<Info pin={Pin} />);
    const pinUsername = screen.getByText(/usernameTest/i);
    expect(pinUsername).toBeInTheDocument();
  });

  test('renders pinCreatedAt', () => {
    render(<Info pin={Pin} />);
    const pinCreatedAt = screen.getByText(/ago/i);
    expect(pinCreatedAt).toBeInTheDocument();
  });
});
