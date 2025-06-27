import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

test('renders hero heading correctly', () => {
  render(<Banner />);
  expect(screen.getByText(/I AM A/i)).toBeInTheDocument();
  expect(screen.getByText(/FREELANCE/i)).toBeInTheDocument();
  expect(screen.getByText(/SAN FRANCISCO/i)).toBeInTheDocument();
});
